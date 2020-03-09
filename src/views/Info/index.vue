<!--  -->
<template>
  <div>
    <el-col :span="4">
      <div class="label-wrap category">
        <label for="">分类：</label>
        <div class="warp-content">
          <el-select
            v-model="category_value"
            placeholder="请选择"
            style="width: 100%;"
          >
            <el-option
              v-for="item in options.category"
              :key="item.id"
              :label="item.category_name"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </div>
      </div>
    </el-col>
    <el-col :span="7">
      <div class="label-wrap date">
        <label for="">日期：&nbsp;&nbsp;</label>
        <div class="warp-content">
          <el-date-picker
            style="width: 100%;"
            v-model="date_value"
            type="datetimerange"
            format="yyyy 年 MM 月 dd 日"
            value-format="yyyy-MM-dd HH:mm:ss"
            align="center"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :default-time="['12:00:00', '08:00:00']"
          >
          </el-date-picker>
        </div>
      </div>
    </el-col>
    <el-col :span="3">
      <div class="label-wrap key-work">
        <label for="">关键字：&nbsp;&nbsp;</label>
        <div class="warp-content">
          <el-select v-model="search_key" style="width: 100%;">
            <el-option
              v-for="item in search_option"
              :key="item.value"
              :value="item.value"
              :label="item.label"
            ></el-option>
          </el-select>
        </div>
      </div>
    </el-col>
    <el-col :span="3">
      <el-input
        v-model="search_keyWork"
        placeholder="请输入内容"
        style="width: 100%;"
      ></el-input>
    </el-col>
    <el-col :span="2">
      <el-button type="danger" style="width: 100%;" @click="getList"
        >搜索</el-button
      >
    </el-col>
    <el-col :span="3">&nbsp;</el-col>
    <el-col :span="2">
      <el-button
        type="danger"
        class="pull-right"
        style="width: 100%;"
        @click="dialog_info = true"
        >新增</el-button
      >
    </el-col>

    <!-- 换行 -->
    <div class="black-space-30"></div>
    <el-table
      :data="table_data.item"
      border
      v-loading="loadingData"
      @selection-change="handleSelectionChange"
      style="width: 100%"
    >
      <!-- 列 -->
      <el-table-column type="selection" width="45"></el-table-column>
      <el-table-column prop="title" label="标题" width="230"></el-table-column>
      <el-table-column
        prop="categoryId"
        label="类型"
        width="130"
        :formatter="toCategory"
      ></el-table-column>
      <el-table-column
        prop="createDate"
        label="日期"
        width="237"
        :formatter="toData"
      ></el-table-column>
      <el-table-column prop="user" label="管理员" width="115"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "infoIndex",
  data() {
    return {
      // 日期值
      date_value: "",
      options: {
        // 分类数组
        category: []
      },
      // 信息分类值
      category_value: "",
      // 搜索类型数组
      search_option: [],
      // 搜索字段id
      search_key: "id",
      // 搜索字段
      search_keyWork: "",
      // 以上是搜索框
      loadingData: false,
      // 表示数据
      table_data: {
        item: []
      }
    };
  },
  methods: {
    getList() {},
    handleSelectionChange() {},
    toCategory() {},
    toData() {}
  }
};
</script>
<style lang="scss" scoped>
@import "../../styles/config.scss";
.label-wrap {
  &.category {
    @include labelDom(left, 60, 40);
  }
  &.date {
    @include labelDom(right, 93, 40);
  }
  &.key-work {
    @include labelDom(right, 99, 40);
  }
}
</style>

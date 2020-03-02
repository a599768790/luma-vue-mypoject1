<!--  -->
<template>
  <el-form label-width="150px" :rules="rules" ref="items" :model="data">
    <div class="main-form">
      <div
        v-for="item in items"
        :key="item.label"
        :class="item.class || 'col-md-6'"
      >
        <el-form-item :label="item.label + '：'" :prop="item.prop">
          <el-input
            v-if="item.type === 'input'"
            v-model="data[item.prop]"
            :placeholder="item.props.placeholder || '请输入'"
            :disabled="item.props.disabled || false"
          ></el-input>
          <el-select
            v-if="item.type === 'select'"
            v-model="data[item.prop]"
            :placeholder="item.props.placeholder || '请选择'"
            :disabled="item.props.disabled || false"
            style="width: 100%;"
          >
            <el-option
              v-for="i in item.props.list"
              :key="i.value"
              :label="i.label"
              :value="i.value"
            ></el-option>
          </el-select>
          <el-switch
            v-model="data[item.prop]"
            v-if="item.type === 'switch'"
            :disabled="item.props.disabled || false"
          ></el-switch>
          <el-date-picker
            v-model="data[item.prop]"
            v-if="item.type === 'date'"
            :disabled="item.props.disabled || false"
            type="date"
            :placeholder="item.props.placeholder || '请选择日期'"
            style="width: 100%;"
          ></el-date-picker>
        </el-form-item>
      </div>
    </div>
  </el-form>
</template>

<script>
export default {
  props: {
    // formOption: Object,
    data: Object,
    items: Array
  },
  computed: {
    rules() {
      //   debugger;
      let rules = this.items.reduce((map, i) => {
        if (i.rules) {
          map[i.prop] = i.rules;
        }
        return map;
      }, {});
      return rules;
    }
  },
  methods: {
    validate() {
      return new Promise(resolve => {
        this.$refs.items.validate(resolve);
      });
    }
  }
};
</script>
<style lang="scss" scoped></style>

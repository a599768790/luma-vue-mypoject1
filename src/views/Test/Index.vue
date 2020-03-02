<!--  -->
<template>
  <div>
    <form-component
      ref="form"
      :data="formOption.formData"
      :items="formOption.viewFormItems"
    ></form-component>
    <div class="submit-btn">
      <el-button size="mini" type="primary" @click="submit">submit</el-button>
    </div>
  </div>
</template>

<script>
import formComponent from "@/components/form/Index.vue";
export default {
  components: {
    formComponent
  },
  data() {
    return {
      formOption: {
        formData: {
          actType: true,
          actRegion: "",
          name: "",
          actDate: ""
        },
        viewFormItems: [
          {
            label: "活动区域",
            prop: "actRegion",
            type: "input",
            props: {
              placeholder: ""
            },
            rules: [
              { required: true, message: "请输入活动区域", trigger: "blur" }
            ]
          },
          {
            label: "活动时间",
            prop: "actDate",
            type: "date",
            props: {
              placeholder: ""
            }
          },
          {
            label: "活动时间2",
            prop: "actDate2",
            type: "date",
            props: { placeholder: "222" }
          }
        ]
      }
    };
  },
  methods: {
    async submit() {
      if (!(await this.$refs.form.validate())) {
        return this.$message.error("请填写完整信息");
      }
      //   console.log(this.formData);
    }
  },
  mounted() {}
};
</script>
<style lang="scss" scoped></style>

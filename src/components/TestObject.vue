<template>
  <div class="test-object">
    {{ general.a.b.c }}
  </div>
</template>

<script>
import nestedProperty from "nested-property";
export default {
  name: "TestObject",
  data() {
    return {
      general: {
        a: {
          b: {
            c: "some value",
            just: "",
            do: "",
            it: "",
          },
        },
        z: {
          y: "other",
        },
      },
    };
  },
  mounted() {
    let test = {
      a: [
        {
          c: "Surprise !",
        },
      ],
    };

    // let newObj = Object.assign(test, this.general)
    // console.log(newObj)

    let chainString = "a.b.c"

    // Good news, it works with a package
    console.log(nestedProperty.set(this.general, chainString, test.a[0].c)); // returns 20, or sdata.a.b[1])
    console.log(this.general)
    /* npm nested-property */
  },
};
</script>

<style>
.test-object {
  border: 1px solid chartreuse;
}
</style>
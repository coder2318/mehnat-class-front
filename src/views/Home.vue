<template>
  <div>
    <CCard>
      <CCardBody>
          <CButton color="primary" class="m-2"> Salom </CButton>
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
import {table as tableData} from '@/data/'
export default {
  name: 'Dashboard',
  data () {
    return {
      selected: 'Month',
      items: tableData.items.map((item, id) => {return {...item, id}}),
      fields: tableData.fields
    }
  },
  methods: {
    color (value) {
      let $color
      if (value <= 25) {
        $color = 'info'
      } else if (value > 25 && value <= 50) {
        $color = 'success'
      } else if (value > 50 && value <= 75) {
        $color = 'warning'
      } else if (value > 75 && value <= 100) {
        $color = 'danger'
      }
      return $color
    }
  }
}
</script>
/* eslint-disable promise/param-names */
import aswApproverPopup from './aswApprover'
import aswInputPopup from './aswInput'
export default {
  methods: {
    $aswApproverPopup (msg) {
      return aswApproverPopup(msg)
    },
    $aswInputPopup (title) {
      return aswInputPopup(title)
    }
  }
}

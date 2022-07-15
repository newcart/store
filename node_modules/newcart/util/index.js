/**
 * Expose `newCart/Util`.
 */
module.exports = newCartUtil
module.exports.newCartUtil = newCartUtil
module.exports.newCartUtil.response = newCartResponse

function newCartResponse(status, message,  data) {
    return {
      status: status,
      message: message,
      data: data
    }
}
function newCartUtil() {

}

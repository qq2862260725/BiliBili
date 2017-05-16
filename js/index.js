$(function() {
	function test() {
		$.ajax({
			url: 'http://api.kdniao.cc/Ebusiness/EbusinessOrderHandle.aspx',
			type: 'GET',
			dataType: 'json',
			data: {
				RequestData:
				EBusinessID:
				RequestType:
				DataSign:
				DataType:
			},
			success: function(reply) {
				console.log(reply)
			}
		})
	}
})
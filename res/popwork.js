
function closePopWork(){
	$('#popwork').attr('src','').hide();
}

$(function(){
	$('body').append('<iframe id="popwork" src="" frameborder="0"></iframe>')
	$('.imglist a').on('click', function(){
		var me = $(this);
		$('#popwork')
			.attr('src', me.attr('href'))
			.show();
		return false;
	});
});
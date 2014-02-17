<?php
function showSpriteStyle() {
?>
<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
<style type="text/css">
figure {
	width: 96px;
	display: inline-block;
	margin-top: 0.5em;
	margin-bottom: 0.5em;
	margin-left: 10px;
	margin-right: 10px;
	-webkit-margin-before: 0.5em;
	-webkit-margin-after: 0.5em;
	-webkit-margin-start: 10px;
	-webkit-margin-end: 10px;
}
figure figcaption {
	font-size: 10.5px;
	text-align: center;
}
</style>
<script type="text/javascript">
	var _gaq = _gaq || [];
	_gaq.push(['_setAccount', 'UA-26211653-1']);
	_gaq.push(['_setDomainName', 'pokemonshowdown.com']);
	_gaq.push(['_setAllowLinker', true]);
	_gaq.push(['_trackPageview']);

	(function() {
		var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	})();
</script>
<?php
}
function showSpriteIndex($path) {
?>
<?php
$files = glob($path);
foreach ($files as &$i) {
	$i = htmlentities($i);
?>
<figure id="<?php echo $i ?>">
<img src="<?php echo $i ?>" alt="<?php echo $i ?>" title="<?php echo $i ?>" />
<figcaption><a href="#<?php echo $i ?>"><?php echo $i ?></a></figcaption>
</figure>
<?php
}
?>
<?php
}
?>

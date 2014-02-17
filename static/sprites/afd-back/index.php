<?php
require_once '../spriteindex.inc.php';
?>
<!DOCTYPE html>
<title>AFD 2013 Back Sprites - Pokemon Showdown!</title>
<?php echo showSpriteStyle() ?>
<h1 style="font-size: 12pt;">AFD 2013 Back Sprites on <a href="http://www.pokemonshowdown.com">Pokemon Showdown</a></h1>
<p>These are the back sprites. You can also <a href="../afd/">view the front sprites</a>.</p>
<?php
showSpriteIndex('*.png');

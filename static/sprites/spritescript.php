<pre><?php

$items = file_get_contents('../data/items.js');

$matches = array();

preg_match_all('/"sprite\:\:([^"]*)"/', $items, $matches, PREG_SET_ORDER);

$dir = scandir('itemicons/');

$matchindex = array();

foreach ($matches as $match)
{
	$id = preg_replace('/[^a-z]+/', '', strtolower($match[1]));
	$matchindex[$id] = $match[0];
}

$i = 0;
foreach ($dir as $file)
{
	if ($file === '.' || $file === '..') continue;
	$id = preg_replace('/[^a-z]+/', '', substr($file, 0, -4));
	
	//echo $id." ".$matchindex[$id]."\n";
	
	if ($matchindex[$id])
	{
		$items = str_replace($matchindex[$id], $i, $items);
	}
	
	$i++;
}

echo $items;
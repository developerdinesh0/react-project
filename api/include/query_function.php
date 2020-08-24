<?php
function fetch_rows($results){
	$data = array();
	if ($results->num_rows > 0) {
		while($row = $results->fetch_assoc()) {
			$data[] = $row;
		}
	}
	return $data;
}

function fetch_row($result){
	$data = array();
	if ($result->num_rows > 0) {
		$data = mysqli_fetch_array($result, MYSQLI_ASSOC);
	}
	return $data;
}

function key_to_array_id($array_objects,$key){
	$custom_array = array();
	if(count($array_objects) > 0){			
		foreach($array_objects as $array_object){
			$custom_array[$array_object[$key]] = $array_object;			
		}
	}
	return $custom_array;
}
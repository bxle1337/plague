<?php
class info{
	function GetFullInfo($link, $id){
	 $rows = mysqli_query($link, "SELECT * FROM `virususers` WHERE id = $id")->fetch_assoc();
	 return array('id' => $rows['id'], 'info' => json_decode($rows['infovk'], true), 'virus' => json_decode($rows['virus'], true));
	}

	function CheckUser($link, $id){
		$rows = mysqli_query($link, "SELECT count(*) FROM `virususers` WHERE id = $id")->fetch_assoc()['count(*)'];
		return $rows > 0 ? true : false;
	}

	function GetUsers($link, $text){
		$response = array();
		if(is_numeric($text)){
			$rows = mysqli_query($link, "SELECT infovk,id FROM `mining` WHERE id LIKE '%$text%' ORDER BY id DESC LIMIT 10");
			while($row = $rows->fetch_assoc()){
				array_push($response, array("infovk" => json_decode($row['infovk'] ,true), "id" => $row['id']));
			}
		}else{
			$text = explode(" ", $text);
			$name = $text[0];
			$fam = $text[1];
			$rows = mysqli_query($link, "SELECT * FROM `mining` WHERE JSON_EXTRACT(`infovk` , '$.first_name') LIKE '%$name%' and JSON_EXTRACT(`infovk` , '$.last_name') LIKE '%$fam%' ORDER BY rand() DESC LIMIT 10");
			while($row = $rows->fetch_assoc()){
				array_push($response, array("infovk" => json_decode($row['infovk'] ,true), "id" => $row['id']));
			}
		}
		return $response;
	}

	function GetTop($link){
		$response = array();
		$mesto = 1;
		$rows = mysqli_query($link, "SELECT infovk,id FROM `mining` WHERE 1 ORDER BY balance DESC LIMIT 50");
		while($row = $rows->fetch_assoc()){
			array_push($response, array("infovk" => json_decode($row['infovk'] ,true), "id" => $row['id'], 'mesto' => $mesto));
			$mesto++;
		}
		return $response;
	}
}
?>

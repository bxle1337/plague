<?php
//ini_set('error_reporting', E_ALL);
//ini_set('display_errors', 1);
//ini_set('display_startup_errors', 1);
include('../bd.php');
include('keycheck.php');
require_once('funcs.php');
$f = new info();

                if($_GET['action'] == 'register'){
									      if($f->CheckUser($link, $id) === true){echo json_encode(array("status" => "error", "message" => "Игрок уже зарегистрирован")); exit();}
									      $info = json_decode(file_get_contents('php://input'), true);
									      $info = json_encode($info, JSON_UNESCAPED_UNICODE);
												$virusname = preg_replace('/[^a-zA-Zа-яА-Я0-9 ]/ui', '', $_GET['name']);
												$virusname = mb_strlen($virusname, 'utf-8') <= 3 ? $id : $virusname;
												$virusname = mb_strlen($virusname, 'utf-8') >= 16 ? $id : $virusname;
												$startvirus = json_encode(array(
													'name' => $virusname,
													'zaraza' => 5,
													'out' => 0.001
												), JSON_UNESCAPED_UNICODE);
												mysqli_query($link, "INSERT INTO `virususers`(`id`, `virus`, `infovk`) VALUES ('$id','$startvirus','$info')");
												echo json_encode(array("status" => "good", 'response' => $f->GetFullInfo($link, $id)), JSON_UNESCAPED_UNICODE);
												exit();
								}else if($_GET['action'] == 'checkuser'){
									      echo json_encode(array("status" => $f->CheckUser($link, $id)));
									      exit();
								}else if($_GET['action'] == 'getmyinfo'){
									      echo json_encode(array("status" => "good", 'response' => $f->GetFullInfo($link, $id)), JSON_UNESCAPED_UNICODE);
									      exit();
								}else if($_GET['action'] == 'getusersbyid'){
									      $text = addslashes($_GET['text']);
									      echo json_encode(array("status" => "good", 'response' => $f->GetUsers($link, $text)), JSON_UNESCAPED_UNICODE);
									      exit();
								}else if($_GET['action'] == 'gettop'){
									      echo json_encode(array("status" => "good", 'response' => $f->GetTop($link)), JSON_UNESCAPED_UNICODE);
									      exit();
								}else{

								}

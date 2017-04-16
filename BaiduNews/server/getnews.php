<?php
	header("Content-type:application/json;charset=utf-8");

	require_once('db.php');
	
	if ($link) {
		//执行成功的过程

		if (@$_GET['newstype']) {
			$newstype = $_GET['newstype'];
			$sql = "SELECT * FROM `news` WHERE `newstype`='{$newstype}'";
			// mysqli_query($link,"SET NANES utf8");
			mysqli_set_charset($link, "utf8");

			$result = mysqli_query($link,$sql);

			$senddata = array();
			while($row = mysqli_fetch_assoc($result)){
				array_push($senddata,array(
											'id'=>$row['id'],
											'newstype'=>$row['newstype'],
											'newstitle'=>$row['newstitle'],
											'newsimg'=>$row['newsimg'],
											'newstime'=>$row['newstime'],
											'newssrc'=>$row['newssrc']

						));
			}
			echo json_encode($senddata);
		}else{
			$sql = 'SELECT * FROM news';
			// mysqli_query($link,"SET NANES utf8");
			mysqli_set_charset($link, "utf8");

			$result = mysqli_query($link,$sql);

			$senddata = array();
			while($row = mysqli_fetch_assoc($result)){
				array_push($senddata,array(
											'id'=>$row['id'],
											'newstype'=>$row['newstype'],
											'newstitle'=>$row['newstitle'],
											'newsimg'=>$row['newsimg'],
											'newstime'=>$row['newstime'],
											'newssrc'=>$row['newssrc']

					));
			}
			echo json_encode($senddata);
		}
	}else {
		echo json_encode(array('success'=>'none'));
	}

	mysqli_close($link);
	// $arr = array(
	// 	'newstype' => '百家',
	// 	'newsimg' => 'img/1.jpg',
	// 	'newstime' => '2017-03-14',
	// 	'newssrc' => 'baidu',
	// 	'newstitle' => '测试动态获取的新闻标题'
	// 	);

	// echo json_encode($arr);
?>
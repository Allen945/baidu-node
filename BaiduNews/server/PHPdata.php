<?php 
header("Content-type: application/json; charset=utf-8");
$link = mysqli_connect('localhost','root','root','BaiduNews','8889');
if($link){
	$sql ='SELECT * FROM news';
	mysqli_query($link,"SET NAMES utf8");
	$result = mysqli_query($link,$sql);
	$senddata = array();
    while ($row = mysqli_fetch_assoc($result)){
    	array_push($senddata,array(
									'id' => $row['id'],
									'newstitle' => $row['newstitle'],
									'newsimg' => $row['newsimg'],
									'newstype' => $row['newstype'],
									'newstime' => $row['newstime'],
									'newssrc' => $row['newssrc'],

    		                     ));
    };

echo json_encode($senddata);

}else{
	echo json_encode(array('success'=>'none'));
}
 mysqli_close($link);
 // $arr = array(
 //                   'newstype' =>'百家',
 //                   'newsimg' => 'image/2.jpg',
 //                   'newstime' =>'2017年3月14日',
 //                   'newssrc' =>'搜狐网',
 //                   'newstitle' =>'测试动态添加数据'
 // 	             );
            // echo json_encode($arr);
 ?>
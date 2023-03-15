
<?php

if(file_get_contents('data.json') != null){

  $name =$_POST['fname'];
  $address =$_POST['email'];
  $phone =$_POST['phone'];
  $img =$_FILES['img1']['name'];
  $temp_name =$_FILES['img1']['tmp_name'];
  $existingData = file_get_contents('data.json');
  $existingArray = json_decode($existingData, true);

 $data =array(
  "name"=>$name,
  "address"=>$address,
  "phoneNumber"=>$phone,
  "imageURL"=>$img
 );
  
array_push($existingArray, $data);
$jsonData = json_encode($existingArray ,JSON_PRETTY_PRINT);
file_put_contents('data.json', $jsonData);
move_uploaded_file($temp_name,"uploads/".$img);
echo "<script>alert('successfully Registerd')</script>";
echo $jsonData;
}
else{
  file_put_contents('data.json', '[]');
  $name =$_POST['fname'];
  $address =$_POST['email'];
  $phone =$_POST['phone'];
  $img =$_FILES['img1']['name'];
  $temp_name =$_FILES['img1']['tmp_name'];
  $existingData = file_get_contents('data.json');
  $existingArray = json_decode($existingData, true);

 $data =array(
  "name"=>$name,
  "address"=>$address,
  "phoneNumber"=>$phone,
  "imageURL"=>$img
 );
  

array_push($existingArray, $data);
$jsonData = json_encode($existingArray ,JSON_PRETTY_PRINT);
file_put_contents('data.json', $jsonData);
move_uploaded_file($temp_name,"uploads/".$img);
echo "<script>alert('successfully Registerd')</script>";
echo $jsonData;

}

 
?>


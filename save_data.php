<?php
/**
 * File name: save_data.php
 * PHP script to handle form submissions containing the user's information.
 * PHP version 8.2.0
 * 
 * @category PHP
 * @package  CodilarProjects
 * @license  https://opensource.org/licenses/MIT MIT
 * @link     https://www.example.com/docs/auth
 * @author   vishnu <vishnu.cp@codilar.com>
 * @return   void
 */
function addData()
{
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
      $jsonData = json_encode($existingArray, JSON_PRETTY_PRINT);
      file_put_contents('data.json', $jsonData);
      move_uploaded_file($temp_name, "uploads/".$img);
      echo "successfully Registerd";
}

if (file_get_contents('data.json') === null) {

      file_put_contents('data.json', '[]');
      // echo $jsonData;
}

addData();
 
?>
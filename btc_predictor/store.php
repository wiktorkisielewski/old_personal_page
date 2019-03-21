<head>
        <link href="style.css" rel="stylesheet" type="text/css">
        <title>BitPredictor</title>
    </head>
    <body class="body_2">
        <div class="info">
            <p style="font-size: 70px;"><a href="http://bitpredictor.org">DO IT AGAIN</a></p>
    </div>
</body>
<?
$price = $_POST['user_prediction'];
$address = $_POST['user_address'];
$storage = "storage.html";
    $store = fopen ($storage,'a');
    fwrite($store, "<span name='price'>");
    fwrite($store, $price);
    fwrite($store, "</span><span>.....</span><span name='address'>");
    fwrite($store, $address);
    fwrite($store, "</span><br>");
    fclose($store);  
?>
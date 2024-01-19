var rollV, nameV, addressV, phoneV;

function readForm(){
    rollV=document.getElementById('rollno').value;
    nameV=document.getElementById('name').value;
    addressV=document.getElementById('address').value;
    phoneV=document.getElementById('phone').value;
    console.log(rollV, nameV, addressV, phoneV);
}

// document.getElementById('insert').onclick = function() {
//     readForm();

//     firebase.database().ref("student/"+rollV).set(
//         {
//             rollNo: rollV,
//             name: nameV,
//             address: addressV,
//             phone: phoneV,
//         }
//     );
//     alert("Data inserted");
//     document.getElementById('rollno').value="";
//     document.getElementById('name').value="";
//     document.getElementById('address').value="";
//     document.getElementById('phone').value="";
// };
// val1 = 2422121212;
// c1p1_count=2;
// c1p1_prize=200;
// c1p2_count=4;
// c1p2_prize=20;


document.getElementById('insert').onclick = function() {
    // readForm();

    firebase.database().ref("student/"+val1).set(
        {
            id:val1,
            products: {
                c1_p1:{
                    noOfProducts: c1p1_count,
                    prize: c1p1_prize
                },
                c1_p2:{
                    noOfProducts: c1p2_count,
                    prize: c1p2_prize
                },
            },
            totalprize: (c1p1_count*c1p1_prize)+(c1p2_count*c1p2_prize)
        }
    );
    alert("Data inserted 2");
    // document.getElementById('rollno').value="";
    // document.getElementById('name').value="";
    // document.getElementById('address').value="";
    // document.getElementById('phone').value="";
};

document.getElementById('update').onclick = function() {
        console.log("in your orders");
        // console.log(noOfProducts,prize,payment_id)
        // console.log(payment_id)
        payment_id='1234';
        var val = localStorage.getItem("inputValue1");
        firebase.database().ref('RegisterInfo/'+uniqueId+'/orders').update(
            {
                nop:1,
                pr:2,
                p_id:1
            }
        );
        alert("data updated")
    


};

// document.getElementById('delete').onclick = function() {
//     readForm();

//     firebase.database().ref("student/"+rollV).remove(
//         // {
//         //     rollNo: rollV,
//         //     name: nameV,
//         //     address: addressV,
//         //     phone: phoneV,
//         // }
//     );
//     alert("Data Deleted");
//     document.getElementById('rollno').value="";
//     document.getElementById('name').value="";
//     document.getElementById('address').value="";
//     document.getElementById('phone').value="";
// };










// /////////////////////////////////////////////////////////////////////////////////////

// random()
// // c1
// base_productName_c1p1='c1_Product1'
// base_productImage_c1p1='chakli20.jpg'

// base_productName_c1p2='c1_Product2'
// base_productImage_c1p2='chakli10.jpg'

// base_productName_c1p3='c1_Product3'
// base_productImage_c1p3='chakli10.jpg'

// base_productName_c1p4='c1_Product4'
// base_productImage_c1p4='chakli10.jpg'
// // c2
// base_productName_c2p1='c2_Product1'
// base_productImage_c2p1='chakli10.jpg'

// base_productName_c2p2='c2_Product2'
// base_productImage_c2p2='chakli10.jpg'

// base_productName_c2p3='c2_Product3'
// base_productImage_c2p3='chakli10.jpg'

// base_productName_c2p4='c2_Product4'
// base_productImage_c2p4='chakli10.jpg'
// // c3
// base_productName_c3p1='c3_Product1'
// base_productImage_c3p1='chakli10.jpg'

// base_productName_c3p2='c3_Product2'
// base_productImage_c3p2='chakli10.jpg'

// base_productName_c3p3='c3_Product3'
// base_productImage_c3p3='chakli10.jpg'

// base_productName_c3p4='c3_Product4'
// base_productImage_c3p4='chakli10.jpg'




// function random(){
//     firebase.database().ref("student/" + 8108070876).on("value", function(snap){
//         var demo = snap.val(); 
//         console.log(demo)
//         // c1
//         if(demo.products.c1.c1_p1.prize != 0){
//             createElementOfCart(base_productName_c1p1,base_productImage_c1p1,demo.products.c1.c1_p1.noOfProducts,demo.products.c1.c1_p1.prize);
//         }
//         if(demo.products.c1.c1_p2.prize != 0){
//             createElementOfCart(base_productName_c1p2, base_productImage_c1p2,demo.products.c1.c1_p2.noOfProducts,demo.products.c1.c1_p2.prize);
//         }
//         if(demo.products.c1.c1_p3.prize != 0){
//             createElementOfCart(base_productName_c1p3, base_productImage_c1p3,demo.products.c1.c1_p3.noOfProducts,demo.products.c1.c1_p3.prize);
//         }
//         if(demo.products.c1.c1_p4.prize != 0){
//             createElementOfCart(base_productName_c1p4, base_productImage_c1p4,demo.products.c1.c1_p4.noOfProducts,demo.products.c1.c1_p4.prize);
//         }
//         // c2
//         if(demo.products.c2.c2_p1.prize != 0){
//             createElementOfCart(base_productName_c2p1, base_productImage_c2p1,demo.products.c2.c2_p1.noOfProducts,demo.products.c2.c2_p1.prize);
//         }
//         if(demo.products.c2.c2_p2.prize != 0){
//             createElementOfCart(base_productName_c2p2, base_productImage_c2p2,demo.products.c2.c2_p2.noOfProducts,demo.products.c2.c2_p2.prize);
//         }
//         if(demo.products.c2.c2_p3.prize != 0){
//             createElementOfCart(base_productName_c2p3, base_productImage_c2p3,demo.products.c2.c2_p3.noOfProducts,demo.products.c2.c2_p3.prize);
//         }
//         if(demo.products.c2.c2_p4.prize != 0){
//             createElementOfCart(base_productName_c2p4, base_productImage_c2p4,demo.products.c2.c2_p4.noOfProducts,demo.products.c2.c2_p4.prize);
//         }
//         // c3
//         if(demo.products.c3.c3_p1.prize != 0){
//             createElementOfCart(base_productName_c3p1, base_productImage_c3p1,demo.products.c3.c3_p1.noOfProducts,demo.products.c3.c3_p1.prize);
//         }
//         if(demo.products.c3.c3_p2.prize != 0){
//             createElementOfCart(base_productName_c3p2, base_productImage_c3p2,demo.products.c3.c3_p2.noOfProducts,demo.products.c3.c3_p2.prize);
//         }
//         if(demo.products.c3.c3_p3.prize != 0){
//             createElementOfCart(base_productName_c3p3, base_productImage_c3p3,demo.products.c3.c3_p3.noOfProducts,demo.products.c3.c3_p3.prize);
//         }
//         if(demo.products.c3.c3_p4.prize != 0){
//             createElementOfCart(base_productName_c3p4, base_productImage_c3p4,demo.products.c3.c3_p4.noOfProducts,demo.products.c3.c3_p4.prize);
//         }
//     }
//     );
// }
// function createElementOfCart(pname,photo,pquantity,pprize){
//     var root=document.createElement('div');
//     var wrapper=document.createElement('div');

//     var img=document.createElement('img');
//     img.src=photo;
//     img.style.height='100px'
//     img.style.width='100px';

//     var p_name=document.createElement('span');
//     p_name.textContent=pname;
//     p_name.style.color='green'
    

//     var p_quantity=document.createElement('span');
//     p_quantity.textContent=pquantity;
//     p_quantity.style.color='pink';

//     var p_prize=document.createElement('span');
//     p_prize.textContent=pprize;
//     p_prize.style.color='red'


//     wrapper.append(img,p_name,p_quantity,p_prize)
//     root.append(wrapper);
//     document.body.append(root);
// }


/////////////////////////////////////////////////////////////////////////////////////

// document.getElementById('read').onclick = function() {
//     readForm();

//     firebase.database().ref("student/" + 1234567890).on("value", function(snap){
//         var demo = snap.val(); 
//         console.log(demo)
//         // if(demo.prod)
//         if(demo.products.c1.c1_p1.prize != 0){
//             document.getElementById('pr_name').innerHTML='c1_Product1'
//             document.getElementById("image1").src = "chakli20.jpg";
//             document.getElementById('pr_quantity').innerHTML=demo.products.c1.c1_p1.noOfProducts;
//             document.getElementById('pr_totalPrize').innerHTML=demo.products.c1.c1_p1.prize;
//         }

//     }
//     );
//     alert("Data readed");
// };

    document.getElementById('login').onclick = function() {
    readForm();

    firebase.database().ref("student/" + rollV).on("value", function(snap){
        var demo = snap.val(); 
        var rollnumber = demo.rollNo;
        var phonenumber = demo.phone;
        if (rollV == rollnumber && phonenumber == phoneV){
            alert("login successful");
        }else{
            alert("Invalid credentials");
        }
    }
    );
    alert("Data readed");
};


// jQuery(function ($) {

//        $("#mainForm").submit(function(e){
//         e.preventDefault();
//         document.querySelector('button[name="submit"]').disabled=true;

//         var intlNumber = $("#telephone").intlTelInput("getNumber");

//         let data = {
//             'firstname': document.querySelector('input[name="firstname"]').value,
//             'lastname': document.querySelector('input[name="lastname"]').value,
//             'email': document.querySelector('input[name="email"]').value,
//             'phone': intlNumber,
//             'iso': document.querySelector('input[name="iso"]').value,
//             'ip': document.querySelector('input[name="ip"]').value,
//             'affiliate_id': getUrlParameter('affiliate_id'),
//         }

//         axios({
//             method: 'POST',
//             url: '/send.php',
//             data: data,
//             }).then( (response) => {
//                 console.log(response);
//                 var result=JSON.parse(response.data);
//                 console
//                 if(result.autologin===undefined){
//                 alert(result.message);
//                 document.querySelector('button[name="submit"]').disabled=false;
//                 }else{
//                     if(getUrlParameter('sub3')!==undefined){
//                         var body = document.getElementsByTagName('body')[0];
//                         var fb_frame = document.createElement('iframe');
//                         fb_frame.src = 'https://www.facebook.com/tr?id=' + getUrlParameter('sub3') + '&ev=Lead';
//                         fb_frame.style.width = '1px';
//                         fb_frame.style.height = '1px';
//                         fb_frame.style.display = 'none';
//                         body.append(fb_frame);
//                     }
//                     setTimeout(function(){window.open(result.autologin,"_top")},2000);
//                 }
//             }).catch( (response)=> {
                
//             });
//             setTimeout(() => {
//                 //fbq('track', 'Lead');
//                 //$("#mainForm").unbind().submit()
//                 //$("#mainForm").submit();
//             }, 1000);
//         })

// });

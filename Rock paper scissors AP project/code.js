

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["ba09ec7b-c7d9-4539-8942-4ba9613a7eb1","571f6764-bf10-4644-aaa9-aa68c213f33a","f620e552-e553-415a-a58b-69476e95bee7","e0cb485b-e4a0-4bba-a834-11f1be2588c9","f8f191e0-f9a3-4119-b171-6f41d4e9a050","b130cb0d-c8e6-443c-a451-148d7fa9e9cf","6e205a99-0ea4-451f-a20a-a4d7597491bc","9521a682-4b11-4efe-aef8-dc9fa47e6b90","b6d824cf-1218-47b5-acb7-2bdc7ccfc3cf","56fb9cfa-632c-4a62-b0f0-1d18427bfb5c","e8a32040-17b0-421c-971b-d5172bb0cd0e","90be10e3-27ac-4a8a-b2ca-5ff6ffb8fe4a","dec86bc8-a56a-4110-b3ec-bdfed9d36062","721514cb-449e-4268-9fd7-18bd481a942f","c962cc4b-45f7-49c2-97e0-aeda8749a5f3","67180172-e543-414b-8762-fc41eb6d506c","c029623c-950d-4fe4-84c0-3bb94dcb7634","82fc3d31-15ce-4fd9-a776-525066443641","e5de2487-183e-44df-b0f7-f3d6710052ee","a57597ec-66bb-4307-8428-0e9cb1739b7c","b597e63f-f9cb-405e-997f-9e8c49c20328","29951c21-9f4b-4604-888e-19ec7327f23e","618d30e1-f841-4c62-b316-0e5f357a9d75","3806f99c-b918-47e1-9734-2d12176102fa","a1b3575d-603e-456d-b13c-82bfccf14579","e5cd3138-9260-421c-aa53-da760fdb2229","ab96de36-7307-43a1-b6fa-d20bb280a9e5","88cd3584-2da1-466e-bdc9-c7c91fa98ff0","a926e7b1-bb20-4347-a9ec-26654eb41aaf","f4d6f78f-650e-4d34-86f2-63513434d307","51a32768-5a09-4288-861d-cdf076d7403e","271168d0-5307-4314-8fe5-1986d50e09df","a291a896-911c-4d0f-83b1-b36fdfae91ab","8fc221cd-cb48-4dce-9239-5f48d11349ac","e3cb3298-d41b-451e-8bfc-26dea2640b50","0bffec2e-83d1-42e3-becc-5ebd628e8ab2","0d95a078-9cce-42ce-94d8-2ecc00ff91dc","dac39475-2223-42c0-9170-ad67f919f78d","301da2db-d251-443a-8dd9-ccb38a0c6408","762540e6-b236-4b76-9853-1763673fc8c2","939f4790-8e29-4b6f-8e39-bd2c4b72b387","1b81ce7b-dd7f-412d-90ca-26f36babfd0f","3eaeff24-cc00-4591-aefe-e1279eb1a51c","dbd2a4c8-29e9-4d5f-9757-5bf7eccd56a3","09a3371b-a205-415f-a4e8-192c18c29f49","5ad29b81-d7b0-4034-aa4f-406d4de6941a","d94c7ae5-b879-4e4b-9d4c-ef3de490a02a","90418269-a706-4883-aecf-bcd16c7c3d50","96553bfe-9380-498c-870f-83705e9e5a31","8a1cc479-8dec-4dd0-be51-3a7e3fe6a577","055a387d-3831-4675-9dfb-438eda64ba29","37f751b6-4f15-4637-8ad2-5247f4707124","7f2727b6-4924-459b-aca7-932776e5875f","9eae841c-66ff-4848-b2c5-71349c111146","a4bfedb5-35ae-4d02-b10b-fe52a4bd743f","78e45e14-1b04-4a13-bbad-284891ce7245","0fa111e1-b7d6-4a0b-9fc7-bfd692ccf46f","481236e9-70c2-4619-aef6-81de8d967aad","f4347836-1a62-40c7-bc80-459b6dfed3b3","5676ef4a-ba43-449d-9350-e1293736a0ed","644c2e52-6249-4db4-a17d-95855ff6600f","ce1efe13-79d9-4fbd-9a1c-eae0c305b7e2","ffbc3a72-f796-4a0c-8534-ac286da18ccb"],"propsByKey":{"ba09ec7b-c7d9-4539-8942-4ba9613a7eb1":{"name":"paperhand","sourceUrl":null,"frameSize":{"x":397,"y":301},"frameCount":2,"looping":true,"frameDelay":12,"version":"E1ZYgWaXZ0vu2zmaYhfzHyni2lOYKRBR","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":397,"y":602},"rootRelativePath":"assets/ba09ec7b-c7d9-4539-8942-4ba9613a7eb1.png"},"571f6764-bf10-4644-aaa9-aa68c213f33a":{"name":"Turtlepaperhand","sourceUrl":null,"frameSize":{"x":399,"y":296},"frameCount":2,"looping":true,"frameDelay":12,"version":"YZ2PWH20cQRty4nlbg69kIOONWK07pPx","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":399,"y":592},"rootRelativePath":"assets/571f6764-bf10-4644-aaa9-aa68c213f33a.png"},"f620e552-e553-415a-a58b-69476e95bee7":{"name":"turtleman","sourceUrl":null,"frameSize":{"x":266,"y":442},"frameCount":2,"looping":true,"frameDelay":12,"version":"21N2Zc395OEkp5xGEasfqoL4zemIg04j","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":532,"y":442},"rootRelativePath":"assets/f620e552-e553-415a-a58b-69476e95bee7.png"},"e0cb485b-e4a0-4bba-a834-11f1be2588c9":{"name":"turleman mad","sourceUrl":null,"frameSize":{"x":266,"y":442},"frameCount":2,"looping":true,"frameDelay":12,"version":"nrTrBsIA._STn3nrp7ERaamPpho0bYN4","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":532,"y":442},"rootRelativePath":"assets/e0cb485b-e4a0-4bba-a834-11f1be2588c9.png"},"f8f191e0-f9a3-4119-b171-6f41d4e9a050":{"name":"Turtlerockhand","sourceUrl":null,"frameSize":{"x":345,"y":324},"frameCount":2,"looping":true,"frameDelay":12,"version":"Iduwzw5v_EkJ.hexxjclXx1lIfbfH5rD","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":345,"y":648},"rootRelativePath":"assets/f8f191e0-f9a3-4119-b171-6f41d4e9a050.png"},"b130cb0d-c8e6-443c-a451-148d7fa9e9cf":{"name":"rockhand","sourceUrl":null,"frameSize":{"x":345,"y":326},"frameCount":2,"looping":true,"frameDelay":12,"version":"rwWarQG_rEYwjiQRWkzKfmSfcdmk3oSO","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":345,"y":652},"rootRelativePath":"assets/b130cb0d-c8e6-443c-a451-148d7fa9e9cf.png"},"6e205a99-0ea4-451f-a20a-a4d7597491bc":{"name":"scissorhand","sourceUrl":null,"frameSize":{"x":419,"y":299},"frameCount":2,"looping":true,"frameDelay":12,"version":"7WoSF_qYuJPA48xYV10Q1SZnFtDiAEwc","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":419,"y":598},"rootRelativePath":"assets/6e205a99-0ea4-451f-a20a-a4d7597491bc.png"},"9521a682-4b11-4efe-aef8-dc9fa47e6b90":{"name":"Turtlescissorhand","sourceUrl":null,"frameSize":{"x":420,"y":289},"frameCount":2,"looping":true,"frameDelay":12,"version":"MiqTjRDbLsW.SUpfKffvSp_HASqa.uDe","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":420,"y":578},"rootRelativePath":"assets/9521a682-4b11-4efe-aef8-dc9fa47e6b90.png"},"b6d824cf-1218-47b5-acb7-2bdc7ccfc3cf":{"name":"playerRight","sourceUrl":null,"frameSize":{"x":229,"y":375},"frameCount":2,"looping":true,"frameDelay":12,"version":"zXqp8WkqWu41PYeKnWc.ceM7UW.yVFRG","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":458,"y":375},"rootRelativePath":"assets/b6d824cf-1218-47b5-acb7-2bdc7ccfc3cf.png"},"56fb9cfa-632c-4a62-b0f0-1d18427bfb5c":{"name":"playerLeft","sourceUrl":null,"frameSize":{"x":229,"y":375},"frameCount":2,"looping":true,"frameDelay":12,"version":"TkGQpZirhwNprON_q6UCLpwxOu2IDkc8","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":458,"y":375},"rootRelativePath":"assets/56fb9cfa-632c-4a62-b0f0-1d18427bfb5c.png"},"e8a32040-17b0-421c-971b-d5172bb0cd0e":{"name":"playerWalkRight","sourceUrl":null,"frameSize":{"x":234,"y":378},"frameCount":2,"looping":true,"frameDelay":12,"version":"5WbYRqlEX_vxw3uCWPglblv5i.fMVcL0","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":468,"y":378},"rootRelativePath":"assets/e8a32040-17b0-421c-971b-d5172bb0cd0e.png"},"90be10e3-27ac-4a8a-b2ca-5ff6ffb8fe4a":{"name":"playerWalkLeft","sourceUrl":null,"frameSize":{"x":229,"y":379},"frameCount":2,"looping":true,"frameDelay":12,"version":"Sv02SA9LnCazloFMCNn36RYlHoM__Q8I","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":458,"y":379},"rootRelativePath":"assets/90be10e3-27ac-4a8a-b2ca-5ff6ffb8fe4a.png"},"dec86bc8-a56a-4110-b3ec-bdfed9d36062":{"name":"startButton","sourceUrl":null,"frameSize":{"x":910,"y":425},"frameCount":5,"looping":true,"frameDelay":12,"version":"7vqJQRVPHYI3ITs.Ooohjl.OwNoX1qP.","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":1820,"y":1275},"rootRelativePath":"assets/dec86bc8-a56a-4110-b3ec-bdfed9d36062.png"},"721514cb-449e-4268-9fd7-18bd481a942f":{"name":"gameTitle","sourceUrl":null,"frameSize":{"x":353,"y":153},"frameCount":10,"looping":true,"frameDelay":12,"version":"4wmYly3PrmscZi2IPLIKBpIcw_YFSyO9","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":706,"y":765},"rootRelativePath":"assets/721514cb-449e-4268-9fd7-18bd481a942f.png"},"c962cc4b-45f7-49c2-97e0-aeda8749a5f3":{"name":"helperintro","sourceUrl":null,"frameSize":{"x":1314,"y":171},"frameCount":20,"looping":false,"frameDelay":4,"version":"trloxZb6Ev9Of4CMWgr3OvzL0s4PxLhI","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":2628,"y":1710},"rootRelativePath":"assets/c962cc4b-45f7-49c2-97e0-aeda8749a5f3.png"},"67180172-e543-414b-8762-fc41eb6d506c":{"name":"sky","sourceUrl":"assets/v3/animations/_5RsLsptF4wVySGPLn2SqV2F6w1hXIzSmBbKHZF06x8/67180172-e543-414b-8762-fc41eb6d506c.png","frameSize":{"x":500,"y":500},"frameCount":1,"looping":true,"frameDelay":4,"version":"GaesBnXHD2Zfu0M8rOmJnkjALODqI6ha","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":500,"y":500},"rootRelativePath":"assets/v3/animations/_5RsLsptF4wVySGPLn2SqV2F6w1hXIzSmBbKHZF06x8/67180172-e543-414b-8762-fc41eb6d506c.png"},"c029623c-950d-4fe4-84c0-3bb94dcb7634":{"name":"playerIdle","sourceUrl":null,"frameSize":{"x":250,"y":419},"frameCount":6,"looping":true,"frameDelay":12,"version":"suuw0xmRrETHrU93MbbABAOMliSuB2eJ","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":750,"y":838},"rootRelativePath":"assets/c029623c-950d-4fe4-84c0-3bb94dcb7634.png"},"82fc3d31-15ce-4fd9-a776-525066443641":{"name":"playerIdleDamage","sourceUrl":null,"frameSize":{"x":250,"y":419},"frameCount":2,"looping":false,"frameDelay":12,"version":"uStEjkdXBWjRx3ykxFnJjCZHUZrIRN0i","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":500,"y":419},"rootRelativePath":"assets/82fc3d31-15ce-4fd9-a776-525066443641.png"},"e5de2487-183e-44df-b0f7-f3d6710052ee":{"name":"ground","sourceUrl":null,"frameSize":{"x":1024,"y":248},"frameCount":1,"looping":true,"frameDelay":12,"version":"5Mj2tDV__Vbf8K8K6gwPHSSlybg8mA2r","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":1024,"y":248},"rootRelativePath":"assets/e5de2487-183e-44df-b0f7-f3d6710052ee.png"},"a57597ec-66bb-4307-8428-0e9cb1739b7c":{"name":"fightground","sourceUrl":null,"frameSize":{"x":1024,"y":248},"frameCount":1,"looping":true,"frameDelay":12,"version":"N9g0kvCilrf.CUuBS.J7xQhlMJ2tWM7v","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":1024,"y":248},"rootRelativePath":"assets/a57597ec-66bb-4307-8428-0e9cb1739b7c.png"},"b597e63f-f9cb-405e-997f-9e8c49c20328":{"name":"1Heart","sourceUrl":null,"frameSize":{"x":902,"y":272},"frameCount":1,"looping":true,"frameDelay":12,"version":"hSrNcw3gCYhNzFc02Xh_.R.F__I8jR8L","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":902,"y":272},"rootRelativePath":"assets/b597e63f-f9cb-405e-997f-9e8c49c20328.png"},"29951c21-9f4b-4604-888e-19ec7327f23e":{"name":"2Hearts","sourceUrl":null,"frameSize":{"x":902,"y":272},"frameCount":1,"looping":true,"frameDelay":12,"version":"9M0p5VA.vNJ1_cv13XGX6woYog7c5rsA","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":902,"y":272},"rootRelativePath":"assets/29951c21-9f4b-4604-888e-19ec7327f23e.png"},"618d30e1-f841-4c62-b316-0e5f357a9d75":{"name":"fullHearts","sourceUrl":null,"frameSize":{"x":901,"y":258},"frameCount":1,"looping":true,"frameDelay":12,"version":"ztirSLZR3_FbnESV2FuIiioERcwY3DrD","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":901,"y":258},"rootRelativePath":"assets/618d30e1-f841-4c62-b316-0e5f357a9d75.png"},"3806f99c-b918-47e1-9734-2d12176102fa":{"name":"rockwall","sourceUrl":null,"frameSize":{"x":464,"y":800},"frameCount":1,"looping":true,"frameDelay":12,"version":"tZ9a6jkB4m_g_BRkFswKz69DW40EcjmC","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":464,"y":800},"rootRelativePath":"assets/3806f99c-b918-47e1-9734-2d12176102fa.png"},"a1b3575d-603e-456d-b13c-82bfccf14579":{"name":"helper","sourceUrl":null,"frameSize":{"x":436,"y":414},"frameCount":2,"looping":true,"frameDelay":12,"version":"dJ2QdX4A8aqtaKh86f72O_gf6wWv0Lpz","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":436,"y":828},"rootRelativePath":"assets/a1b3575d-603e-456d-b13c-82bfccf14579.png"},"e5cd3138-9260-421c-aa53-da760fdb2229":{"name":"TutorialButton","sourceUrl":null,"frameSize":{"x":864,"y":337},"frameCount":1,"looping":true,"frameDelay":12,"version":"4fv5Z8etuYKW9JxJFVcdcIJBz5TtRWdR","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":864,"y":337},"rootRelativePath":"assets/e5cd3138-9260-421c-aa53-da760fdb2229.png"},"ab96de36-7307-43a1-b6fa-d20bb280a9e5":{"name":"Lvl1Button","sourceUrl":null,"frameSize":{"x":834,"y":349},"frameCount":1,"looping":true,"frameDelay":12,"version":"dbCkhv_DzAn.DXk14hKRQWgXYdaqY_GW","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":834,"y":349},"rootRelativePath":"assets/ab96de36-7307-43a1-b6fa-d20bb280a9e5.png"},"88cd3584-2da1-466e-bdc9-c7c91fa98ff0":{"name":"Lvl1ButtonLocked","sourceUrl":null,"frameSize":{"x":834,"y":457},"frameCount":1,"looping":true,"frameDelay":12,"version":"a9nF72SluD_GyXeuX9OEwSNKhplrZw5Y","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":834,"y":457},"rootRelativePath":"assets/88cd3584-2da1-466e-bdc9-c7c91fa98ff0.png"},"a926e7b1-bb20-4347-a9ec-26654eb41aaf":{"name":"PressP","sourceUrl":null,"frameSize":{"x":384,"y":172},"frameCount":1,"looping":true,"frameDelay":12,"version":"aVAb69occwV2WjJp9Ta8nNISeQ2qMznI","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":384,"y":172},"rootRelativePath":"assets/a926e7b1-bb20-4347-a9ec-26654eb41aaf.png"},"f4d6f78f-650e-4d34-86f2-63513434d307":{"name":"helperYourOppponentOBJ","sourceUrl":null,"frameSize":{"x":2097,"y":171},"frameCount":23,"looping":false,"frameDelay":5,"version":"19PXPusnMZb2mKSZpoEIwuAFZOBI_UjN","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":2097,"y":3933},"rootRelativePath":"assets/f4d6f78f-650e-4d34-86f2-63513434d307.png"},"51a32768-5a09-4288-861d-cdf076d7403e":{"name":"rightarrow","sourceUrl":null,"frameSize":{"x":600,"y":466},"frameCount":1,"looping":true,"frameDelay":12,"version":"VuLCsmT0SBHZBz0gdXvfy3tKnouuBpHc","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":466},"rootRelativePath":"assets/51a32768-5a09-4288-861d-cdf076d7403e.png"},"271168d0-5307-4314-8fe5-1986d50e09df":{"name":"rightarrowPlead","sourceUrl":null,"frameSize":{"x":596,"y":467},"frameCount":2,"looping":true,"frameDelay":12,"version":"7fco6X5YmjxIObsjuk86r8wTo0qwhDgL","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":596,"y":934},"rootRelativePath":"assets/271168d0-5307-4314-8fe5-1986d50e09df.png"},"a291a896-911c-4d0f-83b1-b36fdfae91ab":{"name":"turtlemanfightprompt","sourceUrl":null,"frameSize":{"x":455,"y":140},"frameCount":1,"looping":true,"frameDelay":12,"version":"j6Tus_BytV25OBtW2ivghV_3YPueEhU7","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":455,"y":140},"rootRelativePath":"assets/a291a896-911c-4d0f-83b1-b36fdfae91ab.png"},"8fc221cd-cb48-4dce-9239-5f48d11349ac":{"name":"transition","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":27,"looping":false,"frameDelay":3,"version":"pUDhpHBE600c5XozfQAglH_0Dg1fzjAw","loadedFromSource":true,"saved":true,"sourceSize":{"x":500,"y":600},"rootRelativePath":"assets/8fc221cd-cb48-4dce-9239-5f48d11349ac.png"},"e3cb3298-d41b-451e-8bfc-26dea2640b50":{"name":"fighting background","sourceUrl":"assets/v3/animations/_5RsLsptF4wVySGPLn2SqV2F6w1hXIzSmBbKHZF06x8/e3cb3298-d41b-451e-8bfc-26dea2640b50.png","frameSize":{"x":700,"y":700},"frameCount":1,"looping":true,"frameDelay":4,"version":"ElY9FRwA9TPxlOBIq2O1PvB0IZaO4a56","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":700,"y":700},"rootRelativePath":"assets/v3/animations/_5RsLsptF4wVySGPLn2SqV2F6w1hXIzSmBbKHZF06x8/e3cb3298-d41b-451e-8bfc-26dea2640b50.png"},"0bffec2e-83d1-42e3-becc-5ebd628e8ab2":{"name":"platform","sourceUrl":null,"frameSize":{"x":679,"y":253},"frameCount":1,"looping":true,"frameDelay":12,"version":"RmR3RU4WpzwDCn8svFMDVtPBA.W5SvHE","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":679,"y":253},"rootRelativePath":"assets/0bffec2e-83d1-42e3-becc-5ebd628e8ab2.png"},"0d95a078-9cce-42ce-94d8-2ecc00ff91dc":{"name":"playerFight","sourceUrl":null,"frameSize":{"x":234,"y":421},"frameCount":2,"looping":true,"frameDelay":20,"version":"JdWCOZj2Jhjb3q36RILuPoKNgymiNpZq","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":468,"y":421},"rootRelativePath":"assets/0d95a078-9cce-42ce-94d8-2ecc00ff91dc.png"},"dac39475-2223-42c0-9170-ad67f919f78d":{"name":"playerFightTest","sourceUrl":null,"frameSize":{"x":500,"y":500},"frameCount":3,"looping":true,"frameDelay":1,"version":"oGY2qJYfoFSG4ZgwWjAS6dPdnH4iSNne","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":1000,"y":1000},"rootRelativePath":"assets/dac39475-2223-42c0-9170-ad67f919f78d.png"},"301da2db-d251-443a-8dd9-ccb38a0c6408":{"name":"abilities","sourceUrl":null,"frameSize":{"x":633,"y":476},"frameCount":1,"looping":true,"frameDelay":12,"version":"CQ3Yrj8UWS.Bpxkja0c6XE8RZxHi3ZZW","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":633,"y":476},"rootRelativePath":"assets/301da2db-d251-443a-8dd9-ccb38a0c6408.png"},"762540e6-b236-4b76-9853-1763673fc8c2":{"name":"chestOpen2","sourceUrl":null,"frameSize":{"x":128,"y":124},"frameCount":17,"looping":false,"frameDelay":2,"version":"MlAvGszS3hPwNnmPsvsPFoitPrkXC5jH","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":620},"rootRelativePath":"assets/762540e6-b236-4b76-9853-1763673fc8c2.png"},"939f4790-8e29-4b6f-8e39-bd2c4b72b387":{"name":"Chest2","sourceUrl":null,"frameSize":{"x":128,"y":96},"frameCount":1,"looping":true,"frameDelay":12,"version":"oZd4CeVUPsTQpGKjRawAFyHpB0Bo1iv5","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":96},"rootRelativePath":"assets/939f4790-8e29-4b6f-8e39-bd2c4b72b387.png"},"1b81ce7b-dd7f-412d-90ca-26f36babfd0f":{"name":"finish entry","sourceUrl":null,"frameSize":{"x":507,"y":481},"frameCount":2,"looping":true,"frameDelay":12,"version":"9l27vsOdfgtq_qH9LOBwJEchc1pnORe8","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":507,"y":962},"rootRelativePath":"assets/1b81ce7b-dd7f-412d-90ca-26f36babfd0f.png"},"3eaeff24-cc00-4591-aefe-e1279eb1a51c":{"name":"no hearts","sourceUrl":null,"frameSize":{"x":904,"y":269},"frameCount":1,"looping":true,"frameDelay":12,"version":"VyQCm_ZSL.kw9Ikyu2JzH7d67oV8CGjv","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":904,"y":269},"rootRelativePath":"assets/3eaeff24-cc00-4591-aefe-e1279eb1a51c.png"},"dbd2a4c8-29e9-4d5f-9757-5bf7eccd56a3":{"name":"openChest","sourceUrl":null,"frameSize":{"x":450,"y":153},"frameCount":9,"looping":false,"frameDelay":3,"version":"TzZBDHpwGqzXpfyCUjTIVk5.pHn_eQ6w","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":900,"y":765},"rootRelativePath":"assets/dbd2a4c8-29e9-4d5f-9757-5bf7eccd56a3.png"},"09a3371b-a205-415f-a4e8-192c18c29f49":{"name":"pick up abilites","sourceUrl":null,"frameSize":{"x":603,"y":153},"frameCount":11,"looping":false,"frameDelay":3,"version":"R1n_6YkRQrTnAypvopj9CVdsbuekRf6W","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":1206,"y":918},"rootRelativePath":"assets/09a3371b-a205-415f-a4e8-192c18c29f49.png"},"5ad29b81-d7b0-4034-aa4f-406d4de6941a":{"name":"go fight turtleman","sourceUrl":null,"frameSize":{"x":549,"y":153},"frameCount":10,"looping":false,"frameDelay":4,"version":"MblYM6S0aEXMWxu5MPTJn.Wi1JlCzN.0","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":1098,"y":765},"rootRelativePath":"assets/5ad29b81-d7b0-4034-aa4f-406d4de6941a.png"},"d94c7ae5-b879-4e4b-9d4c-ef3de490a02a":{"name":"helperfight","sourceUrl":"assets/v3/animations/p2bCmrFu2zmcA-0VaFCYESRs2rO12elWMKoy21Zi23s/d94c7ae5-b879-4e4b-9d4c-ef3de490a02a.png","frameSize":{"x":651,"y":400},"frameCount":1,"looping":true,"frameDelay":4,"version":"07kYJXCRQUN3xzLY2wUvWYn1Yd_GFcV6","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":651,"y":400},"rootRelativePath":"assets/v3/animations/p2bCmrFu2zmcA-0VaFCYESRs2rO12elWMKoy21Zi23s/d94c7ae5-b879-4e4b-9d4c-ef3de490a02a.png"},"90418269-a706-4883-aecf-bcd16c7c3d50":{"name":"black screen","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"XG_kuQWlQ6a1CwfE8H.xiAetfYKgtnTo","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/90418269-a706-4883-aecf-bcd16c7c3d50.png"},"96553bfe-9380-498c-870f-83705e9e5a31":{"name":"okay button2","sourceUrl":null,"frameSize":{"x":100,"y":41},"frameCount":1,"looping":true,"frameDelay":12,"version":"xSsI5lSqZ09EpZ2_l_64Bds8Cn6q1Fys","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":41},"rootRelativePath":"assets/96553bfe-9380-498c-870f-83705e9e5a31.png"},"8a1cc479-8dec-4dd0-be51-3a7e3fe6a577":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"jLo1W3Oj5EejdInA_YC2UZV99nCMVKdA","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/8a1cc479-8dec-4dd0-be51-3a7e3fe6a577.png"},"055a387d-3831-4675-9dfb-438eda64ba29":{"name":"chestOpen","sourceUrl":null,"frameSize":{"x":188,"y":118},"frameCount":12,"looping":true,"frameDelay":3,"version":"1zSz8RybhPWGGNI_ooxAebPvglkNvw55","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":564,"y":472},"rootRelativePath":"assets/055a387d-3831-4675-9dfb-438eda64ba29.png"},"37f751b6-4f15-4637-8ad2-5247f4707124":{"name":"Chest","sourceUrl":null,"frameSize":{"x":96,"y":88},"frameCount":1,"looping":true,"frameDelay":12,"version":"1hgvoLtK70blKZYcE0NS7_0txmxqtWwE","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":88},"rootRelativePath":"assets/37f751b6-4f15-4637-8ad2-5247f4707124.png"},"7f2727b6-4924-459b-aca7-932776e5875f":{"name":"victory screen","sourceUrl":"assets/v3/animations/p2bCmrFu2zmcA-0VaFCYESRs2rO12elWMKoy21Zi23s/7f2727b6-4924-459b-aca7-932776e5875f.png","frameSize":{"x":600,"y":600},"frameCount":1,"looping":true,"frameDelay":4,"version":"VQn1JKt457zFDIAYA0Ui5z6qyK1hcgN8","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":600},"rootRelativePath":"assets/v3/animations/p2bCmrFu2zmcA-0VaFCYESRs2rO12elWMKoy21Zi23s/7f2727b6-4924-459b-aca7-932776e5875f.png"},"9eae841c-66ff-4848-b2c5-71349c111146":{"name":"okay button","sourceUrl":null,"frameSize":{"x":652,"y":321},"frameCount":1,"looping":true,"frameDelay":12,"version":"K_e0mob92Rk9sb_NujV6RxFND96uhgK7","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":652,"y":321},"rootRelativePath":"assets/9eae841c-66ff-4848-b2c5-71349c111146.png"},"a4bfedb5-35ae-4d02-b10b-fe52a4bd743f":{"name":"wonText","sourceUrl":null,"frameSize":{"x":431,"y":101},"frameCount":1,"looping":true,"frameDelay":12,"version":"M.FyjY32u5NkvoI1CJe6plceol8dyKAR","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":431,"y":101},"rootRelativePath":"assets/a4bfedb5-35ae-4d02-b10b-fe52a4bd743f.png"},"78e45e14-1b04-4a13-bbad-284891ce7245":{"name":"lostText","sourceUrl":null,"frameSize":{"x":451,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"BcgLBQlO9l74l0858J8AK1rJ1Ip2yJDz","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":451,"y":100},"rootRelativePath":"assets/78e45e14-1b04-4a13-bbad-284891ce7245.png"},"0fa111e1-b7d6-4a0b-9fc7-bfd692ccf46f":{"name":"drawText","sourceUrl":null,"frameSize":{"x":271,"y":102},"frameCount":1,"looping":true,"frameDelay":12,"version":"3mCLZ6_C2n2yTWKhknbmM6OtrYj.PHdU","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":271,"y":102},"rootRelativePath":"assets/0fa111e1-b7d6-4a0b-9fc7-bfd692ccf46f.png"},"481236e9-70c2-4619-aef6-81de8d967aad":{"name":"helperfight2","sourceUrl":"assets/v3/animations/p2bCmrFu2zmcA-0VaFCYESRs2rO12elWMKoy21Zi23s/481236e9-70c2-4619-aef6-81de8d967aad.png","frameSize":{"x":651,"y":400},"frameCount":1,"looping":true,"frameDelay":4,"version":"8R1ceU1.vMVCpvraWm_7B_brqfbyPQ09","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":651,"y":400},"rootRelativePath":"assets/v3/animations/p2bCmrFu2zmcA-0VaFCYESRs2rO12elWMKoy21Zi23s/481236e9-70c2-4619-aef6-81de8d967aad.png"},"f4347836-1a62-40c7-bc80-459b6dfed3b3":{"name":"lose screen","sourceUrl":"assets/v3/animations/p2bCmrFu2zmcA-0VaFCYESRs2rO12elWMKoy21Zi23s/f4347836-1a62-40c7-bc80-459b6dfed3b3.png","frameSize":{"x":600,"y":600},"frameCount":1,"looping":true,"frameDelay":4,"version":"Wexsb4fXWbbCDDwEJItIjud_HvBKF4Xm","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":600},"rootRelativePath":"assets/v3/animations/p2bCmrFu2zmcA-0VaFCYESRs2rO12elWMKoy21Zi23s/f4347836-1a62-40c7-bc80-459b6dfed3b3.png"},"5676ef4a-ba43-449d-9350-e1293736a0ed":{"name":"try again button ","sourceUrl":null,"frameSize":{"x":880,"y":434},"frameCount":1,"looping":true,"frameDelay":12,"version":"3WqKLx2eJzuhBwmM7_Zv3Po8tIjKd95H","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":880,"y":434},"rootRelativePath":"assets/5676ef4a-ba43-449d-9350-e1293736a0ed.png"},"644c2e52-6249-4db4-a17d-95855ff6600f":{"name":"continue button","sourceUrl":null,"frameSize":{"x":845,"y":377},"frameCount":1,"looping":true,"frameDelay":12,"version":"Tkfm0tIXLDQ5jGpKznqz7TWN66uaw0Eg","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":845,"y":377},"rootRelativePath":"assets/644c2e52-6249-4db4-a17d-95855ff6600f.png"},"ce1efe13-79d9-4fbd-9a1c-eae0c305b7e2":{"name":"white screen","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"A_TuQsbUTBaDQ2Up_4fuEgMTrTehvxEJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/ce1efe13-79d9-4fbd-9a1c-eae0c305b7e2.png"},"ffbc3a72-f796-4a0c-8534-ac286da18ccb":{"name":"go to the portal","sourceUrl":null,"frameSize":{"x":513,"y":180},"frameCount":8,"looping":false,"frameDelay":4,"version":"OaJFS2nm92eCo4aym2P57QHZpAtriQlL","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":1026,"y":720},"rootRelativePath":"assets/ffbc3a72-f796-4a0c-8534-ac286da18ccb.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

// Play looping background music for the game
playSound("assets/8-Bit-Seas!-Water-Level-Chiptune-Game-Music-by-HeatleyBros.mp3", true);

// GAME MAP 

// Initialize dialogue list
var tutorialDiaList = [];

// Track whether the game has started
var gameStarted = false;

// Create sky background layers
var sky1 = createSprite(-68, 200);
sky1.setAnimation("sky");
sky1.scale = 2;

var sky2 = createSprite(900, 200);
sky2.setAnimation("sky");
sky2.scale = 2;

// Create ground sections
var ground1 = createSprite(200, 390);
ground1.setAnimation("ground");
ground1.scale = 1.5;

var ground2 = createSprite(1200, 390);
ground2.setAnimation("ground");
ground2.scale = 1.5;

var ground3 = createSprite(-1000, 390);
ground3.setAnimation("ground");
ground3.scale = 1.5;

// Create left and right boundary walls
var wall1 = createSprite(-800, -195);
wall1.setAnimation("rockwall");

var wall2 = createSprite(1600, -195);
wall2.setAnimation("rockwall");

// Create invisible wall used in the tutorial to block progression
var INVwall1 = createSprite(-185, 0);
INVwall1.setAnimation("rockwall");
INVwall1.scale = 0.5;
INVwall1.visible = false;

// Track if the player is (falsely) ready to fight the turtleman
var FAKEreadyToFightTurtle = false;

// Create the portal to finish or progress in the level
var portal = createSprite(1224, 108);
portal.setAnimation("finish entry");
portal.scale = 0.4;

//  FIGHTING MAP

// Setup for background and platforms in fight scene
var fightingBackground = createSprite(-1500, 120);
fightingBackground.setAnimation("fighting background");
fightingBackground.scale = 0.7;
fightingBackground.visible = false;

var fightPlatform1 = createSprite(-1400, 90);
fightPlatform1.setAnimation("platform");
fightPlatform1.scale = 0.25;

var fightPlatform2 = createSprite(-1600, 290);
fightPlatform2.setAnimation("platform");
fightPlatform2.scale = 0.48;

// Arrows for guiding the player
var rightArrow = createSprite(-400, 10);
rightArrow.setAnimation("rightarrow");
rightArrow.scale = 0.2;

var rightArrow2 = createSprite(-50, 10);
rightArrow2.setAnimation("rightarrow");
rightArrow2.scale = 0.2;

var rightArrow3 = createSprite(300, 10);
rightArrow3.setAnimation("rightarrow");
rightArrow3.scale = 0.2;

var rightArrow4 = createSprite(650, 10);
rightArrow4.setAnimation("rightarrow");
rightArrow4.scale = 0.2;

// === CHEST ===

// Create the Rock-Paper-Scissors ability chest
var RPSChest = createSprite(-140, 159);
RPSChest.setAnimation("Chest");
RPSChest.collide(ground1);
var chestOpened = false;

// === TURTLEMAN ENEMY ===

var turtleman = createSprite(800, 165);
turtleman.setAnimation("turtleman");
turtleman.scale = 0.2;
turtleman.visible = false;

// Visual indicator of enemy RPS choice
var enemyRPS = createSprite(-1450, 5);
enemyRPS.setAnimation("Turtlerockhand");
enemyRPS.scale = 0.15;
enemyRPS.visible = false;

// === PLAYER SETUP ===

var Player = createSprite(50, 50);
Player.setAnimation("playerIdle");
Player.scale = 0.2;
Player.depth = 100;
Player.setCollider("rectangle");

// Visual indicator of player RPS choice
var playerRPS = createSprite(-1600, -5);
playerRPS.setAnimation("rockhand");
playerRPS.visible = false;
playerRPS.scale = 0.15;

// === ABILITIES MENU ===

var AbilitiesMenu = createSprite(-1423, 220);
AbilitiesMenu.setAnimation("abilities");
AbilitiesMenu.scale = 0.38;

// === HEALTH SYSTEM ===

// Health icons for player and enemy
var hearts = createSprite(-1600, 45);
hearts.setAnimation("fullHearts");
hearts.scale = 0.2;

var enemyHearts = createSprite(-1400, -20);
enemyHearts.setAnimation("fullHearts");
enemyHearts.scale = 0.1;

// Actual health values
var playerHealth = 3;
var enemyHealth = 3;

// === UI AND MENUS ===

// Game title
var Gtitle = createSprite(200, 95);
Gtitle.setAnimation("gameTitle");
Gtitle.scale = 0.8;
Gtitle.visible = true;

// Menu buttons
var tutPressed = false;
var Lvl1Pressed = false;

var tutbtn = createSprite(200, 125);
tutbtn.setAnimation("TutorialButton");
tutbtn.scale = 0.20;
tutbtn.visible = false;

var lvl1btn = createSprite(200, 245);
lvl1btn.setAnimation("Lvl1ButtonLocked");
lvl1btn.scale = 0.20;
lvl1btn.visible = false;

var playbtn = createSprite(200, 210);
playbtn.setAnimation("startButton");
playbtn.scale = 0.25;
playbtn.visible = true;

var pressP = createSprite(310, 50);
pressP.setAnimation("PressP");
pressP.scale = 0.25;
pressP.visible = false;

// Tutorial progression tracker
var completedTutorial = false;

// Dialogue bubble animations for tutorial instructions
var textbubble = ["helperintro", "helperYourOppponentOBJ"];

// Prompt shown when near turtleman
var turtlemanFightPrompt = createSprite(800, 100);

// Flags for fighting readiness
var readyToFightTurtle = false;

// Game status trackers
var keys = 0;
var footstepPlaying = false;
var isMovingEnabled = true;
var tutorialMusicPlaying = false;
var wonFight = false;
var lostFight = false;

// Player memory (location/scale for resets)
var previousPlayerLoc;
var previousPlayerScale;
var startingPlayerLoc;

// === HELPER CHARACTER ===

var helper = createSprite(200, 50);
helper.setAnimation("helper");
helper.scale = 0.2;
helper.visible = false;

var helperintro = createSprite(310, 100);
helperintro.setAnimation("helperintro");
helperintro.scale = 0.2;
helperintro.visible = false;
helperintro.pause(); // Start paused until triggered


// Fighting Booleans
var isFighting = false;            // True when player is in a fight
var isAttacking = false;           // True when player has chosen an attack
var alreadyInFightAnim = false;    // Stops repeat animations during fights
var isFightingTurtle = false;      // True if you're fighting the turtleman
var canFight = false;              // Becomes true when the fight can begin
var startFadingWin = false;        // Starts win screen fade effect
var startFadingLose = false;       // Starts lose screen fade effect
var stoppedFight = false;          // True when fight ends

// Pick up rock
var pickupRock = createSprite(3000,170); // Rock to pick up (starts off-screen)
pickupRock.setAnimation("rockhand");
pickupRock.scale = 0.175;
pickupRock.visible = false;

var pickedUpRock = false; // True if player picked up the rock

var rockhand = createSprite(0,300); // Rock item that follows the player
rockhand.setAnimation("rockhand");
rockhand.scale = 0.1;
rockhand.visible = false;

// Pick up paper
var pickupPaper = createSprite(3000,170); // Paper to pick up (starts off-screen)
pickupPaper.setAnimation("paperhand");
pickupPaper.scale = 0.175;
pickupPaper.visible = false;

var paperhand = createSprite(0,300); // Paper item that follows the player
paperhand.setAnimation("paperhand");
var pickedUpPaper = false; // True if player picked up the paper
paperhand.scale = 0.1;
paperhand.visible = false;

// Pick up scissors
var pickupScissors = createSprite(3000,170); // Scissors to pick up (starts off-screen)
pickupScissors.setAnimation("scissorhand");
pickupScissors.scale = 0.175;
pickupScissors.visible = false;

var scissorhand = createSprite(0,300); // Scissors item that follows the player
scissorhand.setAnimation("scissorhand");
scissorhand.visible = false;
var pickedUpScissors = false; // True if player picked up the scissors
scissorhand.scale = 0.1;

// True if player picked up rock, paper, and scissors
var pickedupRPS = false;

// Transition animation for entering fight scenes
var transition = createSprite(200,200);
transition.setAnimation("transition");
transition.scale = 5.1;
transition.visible = false;
transition.pause();

turtlemanFightPrompt.setAnimation("turtlemanfightprompt");
turtlemanFightPrompt.visible = false;
turtlemanFightPrompt.scale = 0.3;

var startingTransition = false; // Used to know when to start the transition

// Used to make sure chest sound only plays once
var playedChestSound = false;

// === Dialogue system ===
var dialogueIndex = 0;         // Current line in the dialogue
var dialogueIsActive = false;  // True if dialogue is showing
var dialogueTimer = 0;         // Used for timing when next line appears
var dialogueDelay = 100;       // Delay time before showing next line

// === Fight Accessory Sprites ===
var okayCounter = 0; // Tracks how many times the 'Okay' button was clicked

// Background behind fight text
var blackscreen = createSprite(-1500,120);
blackscreen.setAnimation("black screen");
blackscreen.alpha = 0.7;
blackscreen.scale  = 4;

var blackScreenOn = false; // True if black screen is shown

// Text that says Win, Lose, or Draw
var WLDtext = createSprite(-1540,-50);
WLDtext.setAnimation("drawText");
WLDtext.visible = false;
WLDtext.scale = 0.4;

// Helper dialogue that shows during fighting tutorial
var helperFight = createSprite(-1500,70);
helperFight.setAnimation("helperfight");
helperFight.scale = 0.5;

// Button used to continue dialogue during the fight
var okaybtn = createSprite(-1500,240);
okaybtn.setAnimation("okay button");
okaybtn.scale = 0.3;

// Screen that shows after fight ends (victory or defeat)
var resultScreen = createSprite(-1500,120);
resultScreen.setAnimation("victory screen");
resultScreen.scale = 0.7;
resultScreen.alpha = 0;

// Continue button that shows after winning
var continuebtn = createSprite(-1500,2000000);
continuebtn.setAnimation("continue button");
continuebtn.scale = 0.2;
continuebtn.visible = false;

// Try again button that shows after losing
var tryagainbtn = createSprite(-1500,200000);
tryagainbtn.setAnimation("try again button ");
tryagainbtn.scale = 0.2;
tryagainbtn.visible = false;

// Tracks if win or lose music is playing so it doesn't repeat
var playingWinMusic = false;
var playingLoseMusic = false;

// Timer for portal and fade
var portalTime = 0;

// Starts fade to white effect when entering portal
var startFadingWhite = false;

// White screen for fade effect when level ends
var whiteScreen1 = createSprite(1400,20000);
whiteScreen1.setAnimation("white screen");
whiteScreen1.alpha = 0;

// True if chest already dropped the items
var droppedItems = false;



function draw() {
  // Set background color
  background("pink"); 
  
  // Save the player's starting location (only once)
  if (!gameStarted){
    startingPlayerLoc = Player.x;
  }

  // When the play button is clicked
  if (mouseWentDown("leftButton") && mousePressedOver(playbtn)) { 
    playbtn.visible = false;   // Hide play button
    Gtitle.visible = false;    // Hide game title
    playbtn.y = 300;           // Move button down
    lvl1btn.visible = true;    // Show level button
    tutbtn.visible = true;     // Show tutorial button
    playSound("assets/category_accent/puzzle_game_accent_lock_02.mp3", false); // Click sound

    console.log("start button pressed");
  }

  // Check if helper is using the right animation
  if (helper.animation.getAnimation == "helper"){
    console.log("u told me so");
  }

  // When the tutorial button is clicked
  if (mouseWentDown("leftButton") && mousePressedOver(tutbtn)) {
    tutbtn.visible = false;
    lvl1btn.visible = false;
    startingTransition = true;         // Start the transition
    transition.visible = true;
    transition.setFrame;              // Start from first frame (fix)
    transition.play();                // Play animation
    transition.x = 200;
    transition.y = 200;
    playSound("assets/category_achievements/melodic_win_4.mp3", false); // Transition sound

    console.log("Tutorial button pressed, starting transition");
  }

  // If level 1 button is clicked before completing tutorial
  if (mouseWentDown("leftButton") && mousePressedOver(lvl1btn) && !completedTutorial){
    playSound("assets/office-keyboard-single-keystroke-gfx-sounds-1-1-00-00.mp3");
  }

  // When transition reaches frame 13, game officially starts
  if (startingTransition && transition.animation.getFrame() === 13) { 
    gameStarted = true;
    Player.x = -500;                  // Move player to tutorial area
    helper.visible = true;
    helperintro.visible = true;
    helperintro.play();              // Start helper dialogue
    turtleman.visible = true;
    stopSound("assets/8-Bit-Seas!-Water-Level-Chiptune-Game-Music-by-HeatleyBros.mp3");

    console.log("Game started mid-transition");
  }

  // Once the transition is finished
  if (startingTransition && transition.animation.getFrame() === transition.animation.getLastFrame()) {
    startingTransition = false;
    transition.visible = false;

    if (!tutorialMusicPlaying){
      playSound("assets/8-Bit-Think!-Calm-Puzzle-Chiptune-Game-Music-by-HeatleyBros.mp3"); // New background music
      tutorialMusicPlaying = true;
    }
  }

  // Hover effects for buttons (make them bigger when mouse is over)
  if (mouseIsOver(tutbtn)) {
    tutbtn.scale = 0.25;
  } else {
    tutbtn.scale = 0.20;
  }

  if (mouseIsOver(lvl1btn)) {
    lvl1btn.scale = 0.25;
  } else {
    lvl1btn.scale = 0.20;
  }

  if (mouseIsOver(playbtn)) {
    playbtn.scale = 0.3;
  } else {
    playbtn.scale = 0.25;
  }

  // Once the game starts and player is not in a fight
  if (gameStarted && !isFighting && !alreadyInFightAnim) {
    RPSChest.x = 159; // Make sure the chest is in the right place
    move();           // Call movement function
    helperFollow();   // Make helper follow player
    transitionFollow(); // Update transition position
  }

  // === Pick Up Items ===

  // Player picks up rock
  if (Player.overlap(pickupRock) && gameStarted) {
    pickupRock.visible = false;
    pickupRock.x = 3000;  // Move off-screen
    pickupRock.y = 170;
    pickedUpRock = true;
    playSound("assets/category_achievements/vibrant_game_positive_achievement_1.mp3", false);
  }

  // Player picks up paper
  if (Player.overlap(pickupPaper) && gameStarted) {
    pickupPaper.visible = false;
    pickupPaper.x = 3000;  // Move off-screen
    pickupPaper.y = 170;
    pickedUpPaper = true;
    playSound("assets/category_achievements/vibrant_game_positive_achievement_1.mp3", false);
  }

  // Player picks up scissors
  if (Player.overlap(pickupScissors) && gameStarted) {
    pickupScissors.visible = false;
    pickupScissors.x = 3000;  // Move off-screen
    pickupScissors.y = 170;
    pickedUpScissors = true;
    playSound("assets/category_achievements/vibrant_game_positive_achievement_1.mp3", false);
  }

  // Show paper following the player if picked up
  if (pickedUpPaper) {
    paperFollowPlayer();
  }

  // Show rock following the player if picked up
  if (pickedUpRock) {
    rockFollowPlayer();
  }

  // Show scissors following the player if picked up
  if (pickedUpScissors) {
    scissorFollowPlayer();
  }

  // If all 3 items were picked up
  if (pickedUpPaper && pickedUpRock && pickedUpScissors) {
    pickedupRPS = true;
  }

  // === Open the Chest ===

  // If player touches chest and it hasn’t been opened yet
  if (Player.overlap(RPSChest) && !playedChestSound) {
    RPSChest.setAnimation("chestOpen");
    chestOpened = true;
    playSound("assets/category_achievements/peaceful_win_6.mp3", false);
    playedChestSound = true;
  }

  // Drop the items from chest after opening animation finishes
  if (chestOpened &&
      RPSChest.animation.getFrame() === RPSChest.animation.getLastFrame() &&
      !pickedupRPS && !droppedItems) {
    
    droppedItems = true;
    RPSChest.destroy(); // Remove the chest

    // Drop Rock
    pickupRock.x = 150;
    pickupRock.y = 170;
    pickupRock.visible = true;

    // Drop Paper
    pickupPaper.x = 100;
    pickupPaper.y = 170;
    pickupPaper.visible = true;

    // Drop Scissors
    pickupScissors.x = 40;
    pickupScissors.y = 170;
    pickupScissors.visible = true;

    console.log("CHESTOPENED");
  }



// === Fight TurtleMan ===

// Show fight prompt when player is close to Turtleman and all items are collected
if (pickedupRPS && Player.x >= 615 && Player.x <= 963 && !wonFight && !lostFight) {
  turtlemanFightPrompt.visible = true;
  readyToFightTurtle = true;
} else {
  turtlemanFightPrompt.visible = false;
  readyToFightTurtle = false;
}

// Save player position and size right before fight
if (readyToFightTurtle){
  previousPlayerLoc = Player.x;
  previousPlayerScale = Player.scale;
}

// Start fight when player presses E
if (keyDown("e") && readyToFightTurtle && !startingTransition ){
  isFighting = true;
  fighting(turtleman);        
  startingTransition = true;  
  isFightingTurtle = true;
  console.log(isFighting);
}

// === Player Movement and Gravity ===

// Apply gravity (player falls)
Player.velocityY = 5;

// Collision while not fighting
if (!isFighting){
  Player.collide(ground1);
  Player.collide(ground2);
  Player.collide(wall1);
}

// Set fall speed and reset animation state if not in a fight
if (!isFighting){
  Player.velocityY = 5;
  alreadyInFightAnim = false;
} else {
  Player.velocityY = 0;

  // Start fight animation once
  if (isFighting && !alreadyInFightAnim) {
    Player.setAnimation("playerFight");
    alreadyInFightAnim = true;
  }
}

// === FIGHTING UI ===

// Make okay button bigger when hovered
if (mouseIsOver(okaybtn)){
  okaybtn.scale = 0.5;
} else {
  okaybtn.scale = 0.3;
}

// Count how many times okay button is clicked
if (mouseWentDown("leftButton") && mousePressedOver(okaybtn)){
  okayCounter++;
  playSound("assets/category_accent/puzzle_game_accent_lock_02.mp3", false);
}

// Show helper instructions in steps
if (mouseWentDown("leftButton") && mousePressedOver(okaybtn) && !canFight && okayCounter == 0){
  helperFight.setAnimation("helperfight");
}

if (mouseWentDown("leftButton") && mousePressedOver(okaybtn) && !canFight && okayCounter == 1){
  helperFight.setAnimation("helperfight2");
}

// After 2nd click, allow fighting to start
if (mouseWentDown("leftButton") && mousePressedOver(okaybtn) && !canFight && okayCounter == 2){
  canFight = true;
  blackscreen.visible = false;
  okaybtn.y = 200000000;      // Move button off screen
  helperFight.visible = false;
  playSound("assets/category_accent/puzzle_game_accent_lock_02.mp3", false);
}

// === HEALTH MECHANICS ===

// Show heart animation based on player's health
if (playerHealth == 3){
  hearts.setAnimation("fullHearts");
}
if (playerHealth == 2){
  hearts.setAnimation("2Hearts");
}
if (playerHealth == 1){
  hearts.setAnimation("1Heart");
}
if (playerHealth <= 0 && !lostFight){
  hearts.setAnimation("no hearts");
  console.log("YOU LOSSSTTTT HAHAHAHAHAH");
  lostFight = true;
  canFight = false;
  startFadingLose = true;
  resultScreen.setAnimation("lose screen");
}

// Show heart animation based on enemy's health
if (enemyHealth == 3){
  enemyHearts.setAnimation("fullHearts");
}
if (enemyHealth == 2){
  enemyHearts.setAnimation("2Hearts");
}
if (enemyHealth == 1){
  enemyHearts.setAnimation("1Heart");
}
if (enemyHealth <= 0 && !wonFight){
  enemyHearts.setAnimation("no hearts");
  console.log("YOU WOONNNN O MEE GOSSHHH");
  playSpeech("ROCK PAPER SCISSORS, VICTORY!!!", "female", "English");
  resultScreen.setAnimation("victory screen");
  startFadingWin = true;
  turtleman.setAnimation("turleman mad");  // Enemy looks angry when defeated
  wonFight = true;
  canFight = false;
}

// === Win/Lose Screen Fade In ===

if (startFadingLose && resultScreen.alpha < 1 && lostFight) {
  resultScreen.alpha += 0.01;
}

if (startFadingWin && resultScreen.alpha < 1 && wonFight) {
  resultScreen.alpha += 0.01;
}

// Once lose screen is fully visible, show try again button and play music
if (startFadingLose && resultScreen.alpha >= 1 && !playingLoseMusic ){
  tryagainbtn.y = 170;
  tryagainbtn.visible = true;
  stopSound("assets/8-Bit-Adventure!-Querky-Fun-Chiptune-Game-Music-by-HeatleyBros.mp3");
  playSound("assets/losing-music.mp3", true);
  playingLoseMusic = true;
}

// Once win screen is fully visible, show continue button and play music
if (startFadingWin && resultScreen.alpha >= 1 && !playingWinMusic) {
  continuebtn.y = 170;
  continuebtn.visible = true;
  stopSound("assets/8-Bit-Adventure!-Querky-Fun-Chiptune-Game-Music-by-HeatleyBros.mp3");
  stopSound();
  playSound("assets/win-music.mp3", true);
  playingWinMusic = true;
}

// Hover effect for try again button
if (mouseIsOver(tryagainbtn)){
  tryagainbtn.scale = 0.25;
} else {
  tryagainbtn.scale = 0.2;
}

// Restart fight if try again is clicked
if (mouseWentDown("leftButton") && mousePressedOver(tryagainbtn)){
  tryAgain();
}

// End fight and return to normal game if continue is clicked
if (mouseWentDown("leftButton") && mousePressedOver(continuebtn)){
  stopFighting();
}

    
// === FIGHTING MECHANICS ===

// Enemy and player can choose rock, paper, or scissors
var enemyChoices = ["rock", "paper", "scissors"];
var enemyChoice;

var playerChoices = ["rock", "paper", "scissors"];
var playerChoice;

if (canFight) {
  // Enlarge rock icon when mouse is over it during a fight
  if (mouseIsOver(rockhand) && isFighting == true) {
    rockhand.scale = 0.18;
  } else {
    rockhand.scale = 0.15;
    rockhand.y - 10;
  }

  // Enlarge paper icon when mouse is over it during a fight
  if (mouseIsOver(paperhand) && isFighting == true) {
    paperhand.scale = 0.18;
  } else {
    paperhand.scale = 0.15;
    paperhand.y - 10;
  }

  // Enlarge scissors icon when mouse is over it during a fight
  if (mouseIsOver(scissorhand) && isFighting == true) {
    scissorhand.scale = 0.18;
  } else {
    scissorhand.scale = 0.15;
    scissorhand.y - 10;
  }

  // === PLAYER CHOOSES ROCK ===
  if (mouseWentDown("leftButton") && mousePressedOver(rockhand) && isFighting) {
    playerChoice = playerChoices[0];
    enemyChoice = enemyChoices[randomNumber(0, 2)];
    console.log("enemy: " + enemyChoice);
    console.log("player: " + playerChoice);

    // Show player's choice on screen
    playerRPS.setAnimation("rockhand");
    playerRPS.visible = true;
    isAttacking = true;

    // Decide who wins
    if (enemyChoice === "rock") {
      console.log("Draw!");
      WLDtext.setAnimation("drawText");
      WLDtext.visible = true;
    } else if (enemyChoice === "paper") {
      console.log("Defeat!");
      WLDtext.setAnimation("lostText");
      WLDtext.visible = true;
      playerHealth -= 1;
    } else if (enemyChoice === "scissors") {
      console.log("You win!");
      enemyHealth -= 1;
      WLDtext.setAnimation("wonText");
      WLDtext.visible = true;
    }

    // Show enemy's choice animation
    if (enemyChoice == "rock" && isFightingTurtle) {
      enemyRPS.setAnimation("Turtlerockhand");
      enemyRPS.visible = true;
    } else if (enemyChoice == "paper" && isFightingTurtle) {
      enemyRPS.setAnimation("Turtlepaperhand");
      enemyRPS.visible = true;
    } else if (enemyChoice == "scissors" && isFightingTurtle) {
      enemyRPS.setAnimation("Turtlescissorhand");
      enemyRPS.visible = true;
    }
  }

  // === PLAYER CHOOSES PAPER ===
  if (mouseWentDown("leftButton") && mousePressedOver(paperhand) && isFighting) {
    playerChoice = playerChoices[1]; // "paper"
    enemyChoice = enemyChoices[randomNumber(0, 2)];
    console.log("enemy: " + enemyChoice);
    console.log("player: " + playerChoice);

    // Decide who wins
    if (enemyChoice === "rock") {
      console.log("You Win!");
      WLDtext.setAnimation("wonText");
      WLDtext.visible = true;
      enemyHealth -= 1;
    } else if (enemyChoice === "paper") {
      console.log("Draw!");
      WLDtext.setAnimation("drawText");
      WLDtext.visible = true;
    } else if (enemyChoice === "scissors") {
      console.log("Defeat!");
      WLDtext.setAnimation("lostText");
      WLDtext.visible = true;
      playerHealth -= 1;
    }

    // Show player's choice
    playerRPS.setAnimation("paperhand");
    playerRPS.visible = true;

    // Show enemy's choice
    if (enemyChoice == "rock" && isFightingTurtle) {
      enemyRPS.setAnimation("Turtlerockhand");
      enemyRPS.visible = true;
    } else if (enemyChoice == "paper" && isFightingTurtle) {
      enemyRPS.setAnimation("Turtlepaperhand");
      enemyRPS.visible = true;
    } else if (enemyChoice == "scissors" && isFightingTurtle) {
      enemyRPS.setAnimation("Turtlescissorhand");
      enemyRPS.visible = true;
    }
  }

  // === PLAYER CHOOSES SCISSORS ===
  if (mouseWentDown("leftButton") && mousePressedOver(scissorhand) && isFighting) {
    playerChoice = playerChoices[2]; // "scissors"
    enemyChoice = enemyChoices[randomNumber(0, 2)];
    console.log("enemy: " + enemyChoice);
    console.log("player: " + playerChoice);

    // Show player's choice
    playerRPS.setAnimation("scissorhand");
    playerRPS.visible = true;

    // Decide who wins
    if (enemyChoice === "rock") {
      console.log("Defeat");
      WLDtext.setAnimation("lostText");
      WLDtext.visible = true;
      playerHealth -= 1;
    } else if (enemyChoice === "paper") {
      console.log("You Win!");
      WLDtext.setAnimation("wonText");
      WLDtext.visible = true;
      enemyHealth -= 1;
    } else if (enemyChoice === "scissors") {
      console.log("Draw!");
      WLDtext.setAnimation("drawText");
      WLDtext.visible = true;
    }

    // Show enemy's choice
    if (enemyChoice == "rock" && isFightingTurtle) {
      enemyRPS.setAnimation("Turtlerockhand");
      enemyRPS.visible = true;
    } else if (enemyChoice == "paper" && isFightingTurtle) {
      enemyRPS.setAnimation("Turtlepaperhand");
      enemyRPS.visible = true;
    } else if (enemyChoice == "scissors" && isFightingTurtle) {
      enemyRPS.setAnimation("Turtlescissorhand");
      enemyRPS.visible = true;
    }
  }
}

// === DIALOGUE MECHANICS ===

// After fight ends, show portal dialogue
if (pickedupRPS && stoppedFight && !completedTutorial) {
  helperintro.setAnimation("go to the portal");
}

// If fight hasn’t started yet, show hint to fight turtleman
if (pickedupRPS && !FAKEreadyToFightTurtle && !isFighting) {
  helperintro.setAnimation("go fight turtleman");
  FAKEreadyToFightTurtle = true;
}

// Standard helper instructions based on where the player is
if (!FAKEreadyToFightTurtle && !isFighting) {
  if (Player.x < -72) {
    helperintro.setAnimation("helperintro");
  } else if (Player.x > -72 && !chestOpened) {
    helperintro.setAnimation("openChest");
  } else if (chestOpened && !readyToFightTurtle) {
    helperintro.setAnimation("pick up abilites");
    INVwall1.y = 200;  // Push wall down so player can go through
    Player.collide(INVwall1);
  } else if (Player.x >= -44 && Player.x <= -28 && chestOpened) {
    rightArrow2.setAnimation("rightarrowPlead");
  } else {
    rightArrow2.setAnimation("rightarrow");
  }
}

// === PORTAL MECHANICS ===

// Start white fade when player gets near portal after fight
if (Player.x >= 1187 && Player.x <= 1251 && stoppedFight) {
  startFadingWhite = true;
  whiteScreen1.scale = 5;
  whiteScreen1.x = Player.x;
  whiteScreen1.y = 162;
} else {
  startFadingWhite = false;
  whiteScreen1.alpha = 0;
  stopSound("assets/Riser-Sound-Effect.mp3");
}

// Slowly fade in the white screen
if (startFadingWhite && whiteScreen1.alpha <= 1) {
  whiteScreen1.alpha += 0.02;
  playSound("assets/Riser-Sound-Effect.mp3");
}

// After fade is complete, reset level and move on
if (whiteScreen1.alpha >= 1) {
  resetTutorial();
  endLevel();
  StartMove();
  resetCamera();
  stopSound("assets/Riser-Sound-Effect.mp3");
}

// === RENDER EVERYTHING ===
drawSprites();
}

 
function move(){
  var isMoving = false; // Tracks if the player is moving this frame

  // If movement is turned off
  if (!isMovingEnabled) {
    Player.setAnimation("playerIdle"); // Show idle animation
    if (footstepPlaying) {
      stopSound("assets/501102__evretro__8-bit-footsteps.mp3"); // Stop footsteps sound
      footstepPlaying = false;
    }
    return; // Stop the function here so the player can't move
  }

  // Move right if right arrow or "D" is pressed
  if ((keyDown("right") || keyDown("d")) && !isMoving && !isFighting) {
    Player.setAnimation("playerWalkRight"); // Use walking animation
    Player.x = Player.x + 16; // Move player to the right
    Player.mirrorX(1); // Face right
    isMoving = true; // Player is moving
  }

  // Move left if left arrow or "A" is pressed
  if ((keyDown("left") || keyDown("a")) && !isMoving && !isFighting) {
    Player.setAnimation("playerWalkRight"); // Use walking animation
    Player.x = Player.x - 15; // Move player to the left
    Player.mirrorX(-1); // Face left
    isMoving = true; // Player is moving
  }

  // Play or stop footstep sound depending on movement
  if (isMoving) {
    if (!footstepPlaying) {
      playSound("assets/501102__evretro__8-bit-footsteps.mp3", true); // Play sound loop
      footstepPlaying = true;
    }
  } else {
    Player.setAnimation("playerIdle"); // Use idle animation if not moving
    if (footstepPlaying) {
      stopSound("assets/501102__evretro__8-bit-footsteps.mp3"); // Stop sound
      footstepPlaying = false;
    }
  }

  // Make camera follow the player when not fighting
  if (camera.isActive() && !isFighting) {
    camera.zoom = 1;
    camera.x = Player.x;
    camera.y = 120;
  }

  drawSprites(); // Draw all the sprites on screen
}

function helperFollow(){
  // Make the helper follow the player around (only when not fighting)
  if (!isFighting){
    helper.x = Player.x - 145;     // Keep helper to the left of the player
    helper.y = 10;
    helperintro.x = Player.x - 50; // Keep speech bubble near the player
    helperintro.y = -50;
  }
}


// === FOLLOW ABILITIES AROUND PLAYER ===

function rockFollowPlayer() {
  // Make rockhand follow the player if chest is open and not in a fight
  if (!isFighting && chestOpened) {
    rockhand.x = Player.x - 40;
    rockhand.y = 90;
    rockhand.visible = true;
  } else {
    false; // This line does nothing and could be removed
  }
}

function paperFollowPlayer() {
  // Make paperhand follow the player if chest is open and not in a fight
  if (!isFighting && chestOpened) {
    paperhand.x = Player.x;
    paperhand.y = 90;
    paperhand.visible = true;
  } else {
    false;
  }
}

function scissorFollowPlayer() {
  // Make scissorhand follow the player if chest is open and not in a fight
  if (!isFighting && chestOpened) {
    scissorhand.x = Player.x + 40;
    scissorhand.y = 90;
    scissorhand.visible = true;
  } else {
    false;
  }
}

// === START FIGHTING SEQUENCE ===

function fighting(a) { 
  isFighting = true;

  
  if (((pickedUpRock || pickedUpPaper) || pickedUpScissors) && gameStarted && isFighting) {
    console.log("This player picked up rock: " + pickedUpRock);

   
    Player.x = -1600;
    Player.y = 190;
    Player.scale = 0.475;

    a.x = -1400;
    a.y = 40;
    a.scale = 0.2;

   
    camera.zoom = 1;
    camera.x = -1500;
    camera.y = 120;

    
    rockhand.x = -1492;
    rockhand.y = 250;
    paperhand.x = -1420;
    paperhand.y = 250;
    scissorhand.x = -1350;
    scissorhand.y = 250;

    StopMove();           
    stopSound();          
    playSound("assets/8-Bit-Adventure!-Querky-Fun-Chiptune-Game-Music-by-HeatleyBros.mp3", true); // Play fight music

   
    fightingBackground.visible = true;
    fightPlatform1.visible = true;
    fightPlatform2.visible = true;
  }

  return;
}

// === STOP FIGHTING SEQUENCE ===

function stopFighting() {
  stoppedFight = true;

  if (stoppedFight) {
    stopSound("assets/win-music.mp3"); // Stop win music
    isFighting = false;
    canFight = false;

    // Put player back where they were before the fight
    Player.x = previousPlayerLoc;
    Player.scale = previousPlayerScale;

    StartMove(); // Allow player to move again

    // Reset fight status
    okayCounter = 0;
    playerHealth = 3;
    enemyHealth = 3;

    // Remove fight UI buttons
    continuebtn.visible = false;
    continuebtn.destroy();
    tryagainbtn.visible = false;
    tryagainbtn.destroy();

    resultScreen.alpha = 0;
    lostFight = false;
    wonFight = true;
    playingLoseMusic = false;
    playingWinMusic = false;
    startFadingLose = false;
    startFadingWin = false;

    // Reset sizes of ability icons
    rockhand.scale = 0.1;
    paperhand.scale = 0.1;
    scissorhand.scale = 0.1;

    // Reset turtleman to original position and animation
    turtleman.x = 800;
    turtleman.y = 165;
    turtleman.setAnimation("turtleman");
  }
}


function transitionFollow() {
  // Make the transition animation follow the player if not fighting
  if (!isFighting) {
    transition.x = Player.x;
    transition.y = 65;
  }

  // Make the transition follow the camera if fighting
  if (isFighting) {
    transition.x = camera.x;
    transition.y = camera.y;
  }
}

function StopMove() {
  // Disable player movement
  isMovingEnabled = false;
}

function StartMove() {
  // Enable player movement
  isMovingEnabled = true;
}

function tryAgain() {
  // Reset fight and allow retry

  stopSound(); // Stop all sounds
  stopSound("assets/8-Bit-Adventure!-Querky-Fun-Chiptune-Game-Music-by-HeatleyBros.mp3");

  if (!completedTutorial) {
    // Restart background music if tutorial isn't finished
    playSound("assets/8-Bit-Adventure!-Querky-Fun-Chiptune-Game-Music-by-HeatleyBros.mp3", true);
  }

  canFight = true;
  okayCounter = 0;
  playerHealth = 3;
  enemyHealth = 3;
  continuebtn.visible = false;
  tryagainbtn.visible = false;
   
  tryagainbtn.y = 1000;
  resultScreen.alpha = 0;
  lostFight = false;
  wonFight = false;
  playingLoseMusic = false;
  playingWinMusic = false;
  startFadingLose = false;
  startFadingWin = false;
}  

function endLevel() {
  // Run this when the tutorial ends

  completedTutorial = true;

  // Play new background music
  playSound("assets/8-Bit-Seas!-Water-Level-Chiptune-Game-Music-by-HeatleyBros.mp3", true);

  // Reset game state
  gameStarted = false;
  isFighting = false;
  isFightingTurtle = false;
  stoppedFight = false;
  startFadingWin = false;
  startFadingLose = false;
  wonFight = false;
  lostFight = false;
  playingWinMusic = false;
  playingLoseMusic = false;

  // Reset health and result visuals
  playerHealth = 3;
  enemyHealth = 3;
  resultScreen.alpha = 0;
  WLDtext.visible = false;

  // Show main menu buttons again
  playbtn.visible = true;
  Gtitle.visible = true;
  tutbtn.visible = true;
  lvl1btn.visible = true;
  lvl1btn.setAnimation("Lvl1Button"); // Show as unlocked
  playbtn.y = 210;
  tutbtn.y = 125;
  lvl1btn.y = 245;

  // Reset player position, size, and animation
  Player.x = startingPlayerLoc;
  Player.scale = 0.2;
  Player.setAnimation("playerIdle");

  // Hide fight and tutorial elements
  helper.visible = false;
  helperintro.visible = false;
  enemyRPS.visible = false;
  playerRPS.visible = false;
  rockhand.visible = false;
  paperhand.visible = false;
  scissorhand.visible = false;
  fightingBackground.visible = false;
  fightPlatform1.visible = false;
  fightPlatform2.visible = false;
  continuebtn.visible = false;
  tryagainbtn.visible = false;

  // Reset camera
  resetCamera();

  // Stop portal and result sounds
  stopSound("assets/Riser-Sound-Effect.mp3");
  stopSound("assets/win-music.mp3");
  stopSound("assets/losing-music.mp3");

  // Hide portal fade screen
  whiteScreen1.visible = false;
  whiteScreen1.alpha = 0;

  // Hide level buttons again
  tutbtn.visible = false;
  lvl1btn.visible = false;
  continuebtn.visible = false;
  tryagainbtn.visible = false;

  // Prevent movement right after reset
  StopMove();
}

function resetCamera() {
  // Move camera back to original position
  camera.x = 200;
  camera.y = 200;
}

function resetTutorial() {
  // Reset everything related to the tutorial and fight

  gameStarted = false;
  isFighting = false;
  isFightingTurtle = false;
  stoppedFight = false;
  startFadingWin = false;
  startFadingLose = false;
  wonFight = false;
  lostFight = false;
  playingWinMusic = false;
  playingLoseMusic = false;
  playedChestSound = false;
  chestOpened = false;
  droppedItems = false;
  pickedUpRock = false;
  pickedUpPaper = false;
  pickedUpScissors = false;
  pickedupRPS = false;
  FAKEreadyToFightTurtle = false;
  okayCounter = 0;

  // Reset health
  playerHealth = 3;
  enemyHealth = 3;

  // Reset heart icons and helper dialogue
  hearts.setAnimation("fullHearts");
  enemyHearts.setAnimation("fullHearts");
  resultScreen.alpha = 0;
  helperintro.setAnimation("helperintro");

  // Reset player
  Player.x = startingPlayerLoc;
  Player.setAnimation("playerIdle");
  Player.scale = 0.2;

  // Reset and reposition chest
  RPSChest.visible = true;
  RPSChest.setAnimation("Chest");
  RPSChest.x = -140;
  RPSChest.y = 159;
  RPSChest.collide(ground1);

  // Move pickup items off screen and hide them
  pickupRock.x = 3000;
  pickupRock.y = 170;
  pickupRock.visible = false;

  pickupPaper.x = 3000;
  pickupPaper.y = 170;
  pickupPaper.visible = false;

  pickupScissors.x = 3000;
  pickupScissors.y = 170;
  pickupScissors.visible = false;

  rockhand.visible = false;
  paperhand.visible = false;
  scissorhand.visible = false;

  // Hide fight-related sprites
  helper.visible = false;
  helperintro.visible = false;
  playerRPS.visible = false;
  enemyRPS.visible = false;
  fightingBackground.visible = false;
  fightPlatform1.visible = false;
  fightPlatform2.visible = false;

  // Reset camera and transition animation
  resetCamera();
  transition.visible = false;
  transition.pause();

  // Reset white screen portal effect  
  whiteScreen1.visible = false;
  whiteScreen1.alpha = 0;

  // Allow player to move again
  StartMove();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};

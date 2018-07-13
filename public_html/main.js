/*Konno Write
 * 
 * DOMの読み込み完了時の動作
 * 
*/
$(document).ready(function(){
    //テキスト格納(最終的にはファイル参照)
    var conText1 = "Awesome and has more than a degree. We head out one. What it is overwhelming. It is dangerous stuff.Amazing what moves the people. And, in the sense of the excitement, the world can not be changed only amazing thing.";
    var conText2 = "圧倒的なものは何ですか？それは危険なものです。人々を動かすのは驚くべきことです。そして興奮の感覚では、世界は驚くほど変わることはありません。";
    
    document.getElementById("btn1in").style.display="none";
    document.getElementById("contenttext2").style.display="none";
    document.getElementById("contenttext1").innerHTML=conText1;
    
		  		$("#btn1Out").click(function out1()
		  		{
                    //英語消す
		  			$("#contenttext1").lettering().animateLetters({opacity:1},{opacity:0},{randomOrder:false,time:200,reset:false},function()
		  			{
                        document.getElementById("contenttext1").style.display="none";
                        document.getElementById("contenttext2").style.display="block";
                        document.getElementById("contenttext2").innerHTML=conText2;
                        //日本語表示
                        $("#contenttext2").lettering().animateLetters({opacity:0},null,{randomOrder:false,time:100,reset:false});
		  			});
                    //ボタン切り替え
                    document.getElementById("btn1Out").style.display="none";
                    document.getElementById("btn1in").style.display="block";
                });
		  		$("#btn1in").click(function in1()
		  		{
		  			$("#contenttext2").lettering().animateLetters({opacity:1},{opacity:0},{randomOrder:false,time:200,reset:false},function()
		  			{
                        document.getElementById("contenttext2").style.display="none";                        
                        document.getElementById("contenttext1").style.display="block";
                        document.getElementById("contenttext1").innerHTML=conText1;
                        $("#contenttext1").lettering().animateLetters({opacity:0},null,{randomOrder:false,time:100,reset:false});
		  			});
                    document.getElementById("btn1in").style.display="none";
                    document.getElementById("btn1Out").style.display="block";
                });
    
})
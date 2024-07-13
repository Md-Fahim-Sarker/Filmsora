const video = document.getElementById('player');

const urlParams = new URLSearchParams(window.location.search);
const videoId = urlParams.get('id');

if (videoId === 'kgf1') {
  video.src = "10.16.100.202/ftps10/iccftps10sasd5/Movies/South Indian (Hindi Dubbed)/K.G.F Chapter 1 (2018) 1080p BluRay.mp4";
  video.play();
  document.title = "K.G.F Chapter 1 2018";
  document.getElementById("ca-1").textContent = "Action,";
  document.getElementById("ca-2").textContent = "Crime,";
  document.getElementById("ca-3").textContent = "Drama,";
  document.getElementById("ca-4").textContent = "Thriller";

  document.getElementById("min").textContent = "155 min";
  document.getElementById("years").textContent = "2018";
  document.getElementById("storyline").textContent = "Rocky, a young man, seeks power and wealth in order to fulfil a promise to his dying mother. His quest takes him to Mumbai, where he gets involved with the notorious gold mafia.";
  document.getElementById("detail-subtitle").textContent = "";
  document.getElementById("text1").innerHTML = document.getElementById("text1").innerHTML.replace(/Film/, "K.G.F");
  document.getElementById("text1").innerHTML = document.getElementById("text1").innerHTML.replace(/Sora/, "Chapter 1");


} else if (videoId === 'kgf2') {
  video.src = " 10.16.100.202/ftps10/iccftps10sasd3/Movies/South Indian (Hindi Dubbed)/K.G.F Chapter 2 (2022) 1080p WEBDL.mp4";
  video.play();
  document.title = "K.G.F Chapter 2 2022";

  document.getElementById("ca-1").textContent = "Action,";
  document.getElementById("ca-2").textContent = "Crime,";
  document.getElementById("ca-3").textContent = "Drama,";
  document.getElementById("ca-4").textContent = "Thriller";

  document.getElementById("min").textContent = "168 min";
  document.getElementById("years").textContent = "2022";
  document.getElementById("storyline").textContent = "Rocky successfully rises as the leader and saviour of the people of the Kolar Gold Fields. But, in his goal to fulfil his mother's wishes, Rocky must tackle Adheera, Inayat Khalil and Ramika Sen.";
  document.getElementById("detail-subtitle").textContent = "";
  document.getElementById("text1").innerHTML = document.getElementById("text1").innerHTML.replace(/Film/, "K.G.F");
  document.getElementById("text1").innerHTML = document.getElementById("text1").innerHTML.replace(/Sora/, "Chapter 2");

} else if (videoId === 'pk') {
  video.src = '10.16.100.214/iccftps14/iccftps14sasd2/Movies/Hindi/PK%20(2014)%20720p%20BluRay.mp4';
  video.play();
  document.title = "PK 2014";

document.getElementById("ca-1").textContent = "Comedy,";
  document.getElementById("ca-2").textContent = "Drama";
  document.getElementById("ca-3").textContent = "Sci-Fi";
  document.getElementById("ca-4").textContent = "";

  document.getElementById("min").textContent = "153 min";
  document.getElementById("years").textContent = "2014";
  document.getElementById("storyline").textContent = "An innocent alien lands on Earth but loses his communication device. He meets Jaggu, a heartbroken reporter, and tries to find his device. With time, he raises many thought-provoking questions.";
  document.getElementById("detail-subtitle").textContent = "";
  document.getElementById("text1").innerHTML = document.getElementById("text1").innerHTML.replace(/Film/, "PK");
  document.getElementById("text1").innerHTML = document.getElementById("text1").innerHTML.replace(/Sora/, "");

} else if (videoId === '3-idiots') {
  video.src = '10.16.100.206/ftps3/ftps3d2/Movies/Hindi/3 Idiots (2009) 1080p BluRay.mp4';
  video.play();
  document.title = "3 Idiots 2009";

document.getElementById("ca-1").textContent = "Comedy,";
  document.getElementById("ca-2").textContent = "Drama";
  document.getElementById("ca-3").textContent = "";
  document.getElementById("ca-4").textContent = "";

  document.getElementById("min").textContent = "170 min";
  document.getElementById("years").textContent = "2009";
  document.getElementById("storyline").textContent = "In college, Farhan and Raju form a great bond with Rancho due to his refreshing outlook. Years later, a bet gives them a chance to look for their long-lost friend whose existence seems rather elusive.";
  document.getElementById("detail-subtitle").textContent = "";
  document.getElementById("text1").innerHTML = document.getElementById("text1").innerHTML.replace(/Film/, "3");
  document.getElementById("text1").innerHTML = document.getElementById("text1").innerHTML.replace(/Sora/, "Idiots");

} else if (videoId === 'robot-2010') {
  video.src = '10.16.100.212/iccftps12/iccftps12sasd9/Movies/4K/South Indian/Enthiran (Robot) (2010) 2160p WEBDL.mkv';
  video.play();
  document.title = "ENTHIRAN (ROBOT) 2010";

  document.getElementById("ca-1").textContent = "Action,";
  document.getElementById("ca-2").textContent = "Sci-Fi,";
  document.getElementById("ca-3").textContent = "Thriller";
  document.getElementById("ca-4").textContent = "";

  document.getElementById("min").textContent = "174 min";
  document.getElementById("years").textContent = "2010";
  document.getElementById("storyline").textContent = "Vaseegaran, a brilliant scientist, builds Chitti, a unique robot, who is programmed to protect mankind and also feel human emotions. Problems arise when Chitti falls in love with his girlfriend.";
  document.getElementById("detail-subtitle").textContent = "";
  document.getElementById("text1").innerHTML = document.getElementById("text1").innerHTML.replace(/Film/, "Enthiran");
  document.getElementById("text1").innerHTML = document.getElementById("text1").innerHTML.replace(/Sora/, "Robot");

} else if (videoId === 'tiger-zinda-hai') {
  video.src = '10.16.100.202/ftps10/iccftps10sasd10/Movies/Hindi/Tiger Zinda Hai (2017) 720p BluRay.mp4';
  video.play();
  document.title = "Tiger Zinda Hai 2017";

  document.getElementById("ca-1").textContent = "Action,";
  document.getElementById("ca-2").textContent = "Thriller";
  document.getElementById("ca-3").textContent = "";
  document.getElementById("ca-4").textContent = "";

  document.getElementById("min").textContent = "161 min";
  document.getElementById("years").textContent = "2017";
  document.getElementById("storyline").textContent = "RAW Agent Tiger joins forces with Zoya in order to rescue a group of nurses who are held hostage by a terrorist organisation.";
  document.getElementById("detail-subtitle").textContent = "";
  document.getElementById("text1").innerHTML = document.getElementById("text1").innerHTML.replace(/Film/, "Tiger Zinda Hai");
  document.getElementById("text1").innerHTML = document.getElementById("text1").innerHTML.replace(/Sora/, "");

} else if (videoId === 'krrish-3') {
  video.src = '10.16.100.206/ftps3/ftps3d6/Movies/Hindi/Krrish%203%20(2013)%201080p%20BluRay.mp4';
  video.play();
  document.title = "Krrish 3 2013";

  document.getElementById("ca-1").textContent = "Action,";
  document.getElementById("ca-2").textContent = "Adventure,";
  document.getElementById("ca-3").textContent = "Sci-Fi";
  document.getElementById("ca-4").textContent = "";

  document.getElementById("min").textContent = "152 min";
  document.getElementById("years").textContent = "2013";
  document.getElementById("storyline").textContent = "Krrish, a young man with superhuman abilities, falls in love with Priya and goes to Singapore to meet her. When he discovers a shocking truth about his father's death, he is forced to use his powers.";
  document.getElementById("detail-subtitle").textContent = "";
  document.getElementById("text1").innerHTML = document.getElementById("text1").innerHTML.replace(/Film/, "Krrish");
  document.getElementById("text1").innerHTML = document.getElementById("text1").innerHTML.replace(/Sora/, "3");

} else if (videoId === 'pushpa-1') {
  video.src = '10.16.100.213/iccftps13/iccftps13sasd8/Movies/4K/South Indian/Pushpa The Rise Part 01 (2021) 2160p UHD WEBRip x264 5.1.mp4';
  video.play();
  document.title = "Pushpa part 1 2021";

  document.getElementById("ca-1").textContent = "Pushpa,";
  document.getElementById("ca-2").textContent = "Action,";
  document.getElementById("ca-3").textContent = "Adventure,";
  document.getElementById("ca-4").textContent = "Crime";

  document.getElementById("min").textContent = "178 min";
  document.getElementById("years").textContent = "2021";
  document.getElementById("storyline").textContent = "A labourer named Pushpa makes enemies as he rises in the world of red sandalwood smuggling. However, violence erupts when the police attempt to bring down his illegal business.";
  document.getElementById("detail-subtitle").textContent = "";
  document.getElementById("text1").innerHTML = document.getElementById("text1").innerHTML.replace(/Film/, "Pushpa:");
  document.getElementById("text1").innerHTML = document.getElementById("text1").innerHTML.replace(/Sora/, "The Rise");

} else if (videoId === 'raatchasi') {
  video.src = '10.16.100.206/ftps3/ftps3d5/Movies/South Indian (Hindi Dubbed)/Raatchasi (2019) 1080p WEBDL.mp4';
  video.play();
  document.title = "Raatchasi 2019";

  document.getElementById("ca-1").textContent = "Drama";
  document.getElementById("ca-2").textContent = "";
  document.getElementById("ca-3").textContent = "";
  document.getElementById("ca-4").textContent = "";

  document.getElementById("min").textContent = "134 min";
  document.getElementById("years").textContent = "2019";
  document.getElementById("storyline").textContent = "A dogged headmistress teaches everyone a lesson in perseverance as she battles bureaucracy and corrupt officials to bring her government-run school up to scratch.";
  document.getElementById("detail-subtitle").textContent = "";
  document.getElementById("text1").innerHTML = document.getElementById("text1").innerHTML.replace(/Film/, "Raatchasi");
  document.getElementById("text1").innerHTML = document.getElementById("text1").innerHTML.replace(/Sora/, "");

} else if (videoId === 'krrish') {
  video.src = '10.16.100.206/ftps3/ftps3d8/Movies/Hindi/Krrish (2006) 720p BluRay.mkv';
  video.play();
  document.title = "Krrish 2016";

  document.getElementById("ca-1").textContent = "Action,";
  document.getElementById("ca-2").textContent = "Adventure,";
  document.getElementById("ca-3").textContent = "Sci-Fi";
  document.getElementById("ca-4").textContent = "";

  document.getElementById("min").textContent = "154 min";
  document.getElementById("years").textContent = "2019";
  document.getElementById("storyline").textContent = "Krrish, a young man with superhuman abilities, falls in love with Priya and goes to Singapore to meet her. When he discovers a shocking truth about his father's death, he is forced to use his powers..";
  document.getElementById("detail-subtitle").textContent = "";
  document.getElementById("text1").innerHTML = document.getElementById("text1").innerHTML.replace(/Film/, "Krrish");
  document.getElementById("text1").innerHTML = document.getElementById("text1").innerHTML.replace(/Sora/, "");

} else if (videoId === '00000') {
  video.src = '4444444';
  video.play();
  document.title = "000000";

  document.getElementById("ca-1").textContent = "000000,";
  document.getElementById("ca-2").textContent = "00000,";
  document.getElementById("ca-3").textContent = "000000,";
  document.getElementById("ca-4").textContent = "000000,";

  document.getElementById("min").textContent = "0000 min";
  document.getElementById("years").textContent = "00000";
  document.getElementById("storyline").textContent = "00000.";
  document.getElementById("detail-subtitle").textContent = "";
  document.getElementById("text1").innerHTML = document.getElementById("text1").innerHTML.replace(/Film/, "00000");
  document.getElementById("text1").innerHTML = document.getElementById("text1").innerHTML.replace(/Sora/, "00000");

} else if (videoId === '00000') {
  video.src = '4444444';
  video.play();
  document.title = "000000";

  document.getElementById("ca-1").textContent = "000000,";
  document.getElementById("ca-2").textContent = "00000,";
  document.getElementById("ca-3").textContent = "000000,";
  document.getElementById("ca-4").textContent = "000000,";

  document.getElementById("min").textContent = "0000 min";
  document.getElementById("years").textContent = "00000";
  document.getElementById("storyline").textContent = "00000.";
  document.getElementById("detail-subtitle").textContent = "";
  document.getElementById("text1").innerHTML = document.getElementById("text1").innerHTML.replace(/Film/, "00000");
  document.getElementById("text1").innerHTML = document.getElementById("text1").innerHTML.replace(/Sora/, "00000");

} else if (videoId === '00000') {
  video.src = '4444444';
  video.play();
  document.title = "000000";

  document.getElementById("ca-1").textContent = "000000,";
  document.getElementById("ca-2").textContent = "00000,";
  document.getElementById("ca-3").textContent = "000000,";
  document.getElementById("ca-4").textContent = "000000,";

  document.getElementById("min").textContent = "0000 min";
  document.getElementById("years").textContent = "00000";
  document.getElementById("storyline").textContent = "00000.";
  document.getElementById("detail-subtitle").textContent = "";
  document.getElementById("text1").innerHTML = document.getElementById("text1").innerHTML.replace(/Film/, "00000");
  document.getElementById("text1").innerHTML = document.getElementById("text1").innerHTML.replace(/Sora/, "00000");

} else if (videoId === '00000') {
  video.src = '4444444';
  video.play();
  document.title = "000000";

  document.getElementById("ca-1").textContent = "000000,";
  document.getElementById("ca-2").textContent = "00000,";
  document.getElementById("ca-3").textContent = "000000,";
  document.getElementById("ca-4").textContent = "000000,";

  document.getElementById("min").textContent = "0000 min";
  document.getElementById("years").textContent = "00000";
  document.getElementById("storyline").textContent = "00000.";
  document.getElementById("detail-subtitle").textContent = "";
  document.getElementById("text1").innerHTML = document.getElementById("text1").innerHTML.replace(/Film/, "00000");
  document.getElementById("text1").innerHTML = document.getElementById("text1").innerHTML.replace(/Sora/, "00000");




} else {
  alert("Oops Something Went Wrong.");
  document.title = "Error";
}

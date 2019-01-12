document.getElementById('music').addEventListener('click',function () {
	browser.tabs.create({url:"https://www.billboard.com/charts/hot-100"});
})
document.getElementById('tvseries').addEventListener('click',function () {
	browser.tabs.create({url:"https://www.imdb.com/search/title?title_type=tv_series"});
})
document.getElementById('clist').addEventListener('click',function () {
	browser.tabs.create({url:"https://clist.by"});
})
document.getElementById('facebook').addEventListener('click',function () {
	browser.tabs.create({url:"https://www.facebook.com"});
})
document.getElementById('whatsapp').addEventListener('click',function () {
	browser.tabs.create({url:"https://web.whatsapp.com"});
})

document.getElementById('channeli').addEventListener('click',function () {
	browser.tabs.create({url:"https://channeli.in/"});
})
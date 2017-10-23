
const config = require('universal-config');
var Unsplash = require('unsplash-js');

console.log(Unsplash);
console.log(Unsplash.Unsplash);



require('dotenv').config();
var mkdirp = require('mkdirp');
var fs = require('fs');
var path = require('path');

var async = require('async');
var request = require('request');



const unsplash = new Unsplash.default({
  applicationId: process.env.APPLICATION_ID,
  secret: process.env.SECRET,
  callbackUrl: process.env.CALLBACK_URL
});


function downloadPhoto(photoInfo) {
	fs.exists(path.join('city_photos', photoInfo.id + '.jpg'), function (exists) {
		if (exists) {
		  console.log('Skipping: ' + photoInfo.id);
		} else {
		  console.log(photoInfo.urls.regular);
		  request(photoInfo.urls.regular)
		  .on('response', function () {
		    console.log('Downloaded: ' + photoInfo.id);
		  })
		  .pipe(fs.createWriteStream(path.join('people_photos', photoInfo.id + '.jpg')));
		}
	});
}

//old download stuff
//unsplash.categories.categoryPhotos(4, x, 30)
/*
mkdirp('city_photos');
mkdirp('city_json_files');
iter_arr = Array.apply(null, Array(8)).map(function (_, i) {return i + 63;});
console.log(iter_arr);
for (i = 1; i < 19; i++) {
	unsplash.collections.getCollectionPhotos(1286709, i, 10)
		.then(Unsplash.toJson)
		.then(json => {
					//console.log(json)
					console.log(json[0].id);
					//console.log(x);
					fs.writeFileSync(path.join('city_json_files', json[0].id + '.json'), JSON.stringify(json), {'flags': 'a'});
					async.each(json, downloadPhoto);
		});
}
*/
/*
mkdirp('nature_photos');
mkdirp('nature_json_files');
iter_arr = Array.apply(null, Array(8)).map(function (_, i) {return i + 63;});
console.log(iter_arr);
for (i = 1; i < 19; i++) {
	unsplash.collections.getCollectionPhotos(1286774, i, 10)
		.then(Unsplash.toJson)
		.then(json => {
					//console.log(json)
					console.log(json[0].id);
					//console.log(x);
					fs.writeFileSync(path.join('nature_json_files', json[0].id + '.json'), JSON.stringify(json), {'flags': 'a'});
					async.each(json, downloadPhoto);
		});
}
*/
mkdirp('people_photos');
mkdirp('people_json_files');
iter_arr = Array.apply(null, Array(8)).map(function (_, i) {return i + 63;});
console.log(iter_arr);
for (i = 1; i < 16; i++) {
	unsplash.collections.getCollectionPhotos(1308364, i, 10)
		.then(Unsplash.toJson)
		.then(json => {
					//console.log(json)
					console.log(json[0].id);
					//console.log(x);
					fs.writeFileSync(path.join('people_json_files', json[0].id + '.json'), JSON.stringify(json), {'flags': 'a'});
					async.each(json, downloadPhoto);
		});
}
/*
iter_arr.forEach(function(x) {
	unsplash.photos.listPhotos(x, 30, "popular")
    			.then(Unsplash.toJson)
			.then(json => {
				console.log(json[0].id);
				console.log(x);
				fs.writeFileSync(path.join('city_json_files', json[0].id + '.json'), JSON.stringify(json), {'flags': 'a'});
				async.each(json, downloadPhoto);
			});
});
*/
function ajax_get(url, callback) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            //console.log('responseText:' + xmlhttp.responseText);
            try {
                var data = JSON.parse(xmlhttp.responseText);
            } catch(err) {
                console.log(err.message + " in " + xmlhttp.responseText);
                return;
            }
            callback(data);
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

ajax_get('https://s3.eu-central-1.amazonaws.com/ecosia-frontend-developer/trees.json', function(data) {
  var trees = data.trees;

  for (treeId in trees) {
    //console.log(trees[treeId]);
    var treelist = document.getElementById('tree-list');

    var card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = '<h2>'+trees[treeId].name+'</h2>'+
    '<p>'+trees[treeId].species_name+'</p>'+
    '<img id="img-'+treeId+'" class="tree-img" src='+trees[treeId].image+' style="display:none">'+
    '<div class="btn-container"><button id="btn-'+treeId+'" class="btn-toggle" type=button" onclick="toggleImage('+treeId+')">Show image</button></div>';

    treelist.appendChild(card);
  }
});

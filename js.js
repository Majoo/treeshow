jQuery.ajax({
            url: "https://s3.eu-central-1.amazonaws.com/ecosia-frontend-developer/trees.json",
            type: "GET",

            contentType: 'application/json; charset=utf-8',
            success: function(resultData) {
                //console.log(resultData);
                var trees = resultData.trees;

                for (treeId in trees) {
                  //console.log(trees[treeId]);
                  var mainbox = document.getElementById('mainbox');

                  var card = document.createElement('div');
                  card.className = 'card';
                  card.innerHTML = '<h2 class="tree-heading">'+trees[treeId].name+'</h2>'+
                  '<h4 class="tree-species">'+trees[treeId].species_name+'</h4>'+
                  '<img id="img-'+treeId+'" class="tree-img" src='+trees[treeId].image+' style="display:none">'+
                  '<div class="btn-container"><button id="btn-'+treeId+'" class="btn-toggle" type=button" onclick="toggleImage('+treeId+')">Show image</button></div>';

                  mainbox.appendChild(card);
                }

            },
            error : function(jqXHR, textStatus, errorThrown) {
              console.error('error fetching trees');
            },

            timeout: 120000,
        });

function toggleImage(treeId) {
  //console.log('toggleImage, id: '+treeId);
  var img = document.getElementById('img-'+treeId);
  var btn = document.getElementById('btn-'+treeId);

  if (img.style.display === 'none') {
        img.style.display = 'block';
        btn.innerText = 'Hide Image'
    } else {
        img.style.display = "none";
        btn.innerText = 'Show Image'
    }
}

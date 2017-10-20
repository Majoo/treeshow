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

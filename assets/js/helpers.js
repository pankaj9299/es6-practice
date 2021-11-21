export function getListing() {
  // Get things
  var todoInstance = new TodoList();
  var listings = todoInstance.getTodo();
  var listParsed = JSON.parse(listings);
  var tbodyHtml = '';
  if(listParsed && listParsed.length > 0) {
      for(var i=0;i<listParsed.length;i++) {
        tbodyHtml += '<tr>';
        tbodyHtml += '<th scope="row">'+(i + 1)+'</th>';
        tbodyHtml += '<td>'+listParsed[i].firstName+'</td>';
        tbodyHtml += '<td>'+listParsed[i].lastname+'</td>';
        tbodyHtml += '<td><i class="bi bi-pencil-fill" data-id="'+(i + 1)+'" data-bs-toggle="tooltip" data-bs-placement="right" title="Tooltip on right"></i>';
        tbodyHtml += '<td><i class="bi bi-trash" data-id="'+(i + 1)+'" data-bs-toggle="tooltip" data-bs-placement="right" title="Tooltip on right"></i>';
        tbodyHtml += '</td>';
        tbodyHtml += '</tr>';
      }
      document.getElementById("table-body").innerHTML = tbodyHtml;
  }
}

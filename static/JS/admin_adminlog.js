$(document).ready(function(){
    let origin = window.location.origin;

    $.ajax({
        type: "POST",
        url: origin + "/admin/getAdminLog",
        contentType: "application/json; charset=utf-8",
        success: function(response){
            this.response = response;

            if(this.response.success === "ok"){
                $('#tbodyUserAction').empty();
                registries = Object.keys(this.response.data)
                for(let index in registries){
                    $('#tbodyUserAction').append('<tr>' +
                                                 '<td>'+ registries[index] +'</td>' +
                                                 '<td>'+ this.response.data[registries[index]].idAdmin +'</td>' +
                                                 '<td>'+ this.response.data[registries[index]].date +'</td>' +
                                                 '<td>'+ this.response.data[registries[index]].idBill +'</td>' +
                                                 '<td>'+ this.response.data[registries[index]].quantityBills +'</td>' +
                                                 '<td>'+ this.response.data[registries[index]].beforeQuantityBills +'</td>' +
                                                 '<td>'+ this.response.data[registries[index]].afterQuantityBills +'</td>' +
                                                 '<td>'+ this.response.data[registries[index]].action +'</td>' +
                                                 '<td>'+ this.response.data[registries[index]].date +'</td>' +
                                                 '</tr>'
                                                );
                }

                $('#tableUserAction').DataTable();
            }
            else{
                document.cookie = 'SID =; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            }
        }
    })
});
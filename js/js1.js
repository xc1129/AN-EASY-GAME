$(document).ready(function(){
    for(row_num=1;row_num<9;row_num++)
    {
        $('#maintable').append("<tr id="+row_num+"></tr>");
        for(col_num=1;col_num<9;col_num++)
        {
            $('#maintable tr').eq(row_num-1).append("<td row="+row_num+" col="+col_num+"></td>");
        }
    }   
});
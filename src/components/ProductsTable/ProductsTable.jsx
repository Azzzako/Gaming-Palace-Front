import React from "react";
import MUIDataTable from "mui-datatables";




const ProductsTable= () => {

    // const columns=[
    //     {
    //       title:"Id producto",
    //       field:"id producto",
         
    //     },
    //     {
    //       title:"Name",
    //       field:"name"
    //     },
    //     {
    //       title:"Trademark",
    //       field:"trademark"
    //     },    
    //     {
    //       title:"Price",
    //       field:"price",
    //       type:"numeric"
    //     },
    //     {
    //       title:"Stock",
    //       field:"stock",
          
    //     },
    //     {
    //       title:"Quantity sold",
    //       field:"quantitysold",
          
    //     },
    //     {
    //       title:"Status",
    //       field:"status",
    //     }
        
    //   ]
    
    //   const data=[
    //     {id:"1", name:"productone", trademark:"trademarkone", price:"100", stock:"10", status:"asset" },
    //     {id:"2", name:"producttwo", trademark:"trademarktwo", price:"200", stock:"10", status:"disabled" },
    //     {id:"3", name:"productthree", trademark:"trademarkthree", price:"300", stock:"10", status:"asset" },
    //     {id:"4", name:"productfour", trademark:"trademarkfour", price:"400", stock:"10", status:"asset" },
    //     {id:"5", name:"productfive", trademark:"trademarkfive", price:"500", stock:"10", status:"asset" },
    //   ]
    
    //   const options={}

    const columns = ["Name", "Trademark", "Price", "Stock", "Status"];
    const data = [
        ["Product1", "Asus", "200", "10", "disabled"],
        ["AProduct2", "Logitech", "80", "10", "active"],
        ["Product3", "Razer", "115", "10", "active"],
        ["Product4", "Noga", "95", "10", "active"],
        ["Product5", "Zodac", "200", "10", "disabled"],
        ["Product6", "Noga", "80", "10", "disabled"],
        ["Product7", "Razer", "115", "10", "active"],
        ["Product8", "Logitech", "95", "10", "active"],
        ["Product9", "Asus", "200", "10", "active"],
        ["Product10", "Logitech", "80", "10", "active"],
        ["Product11", "Asus", "115", "10", "active"],
        ["Product12", "Razer", "95", "10", "active"],
        ["Product13", "Zodac", "200", "10", "active"],
        ["Product14", "Zodac", "80", "10", "active"],
        ["Product15", "Noga", "115", "10", "active"],
        
    ]
    // const options = { filterType: 'checkbox',}

    return(
        <div>
           <MUIDataTable className="tablep"
           title={"Products"}
           data={data}
           columns={columns}
        //    options={options}

        actions={[
            {
                // icon:Edit,
                tooltip: 'Edit product',
                onClick: (e, rowData)=> console.log("Edit Product: "+rowData.name)  
            }
        ]}
           />
        
        </div>
    )

}

export default ProductsTable


import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DataTable from 'react-data-table-component';

const Tablee = (props) => {
    const [familless, setFamillesFiltrr]=useState([]);
    const [search, setSearch] = useState(''); 
    const columns = [
        {
            name: "#",
            selector: (row) => row.id,
            
        },
        {

            name: "Famille",
            selector: (row) => row.nom,
            sortable: true
        },
        {
            name: "Action",
            cell: (row) =>
                <>
                    <button className='btn btn-sm' >
                        <EditIcon className='incon' style={{ color: 'blue' }} />
                    </button>
                    <button className='btn btn-sm'>
                        <DeleteIcon style={{ color: 'red' }} />
                    </button>

                </>
        }
    ]
 
useEffect(()=>{
setFamillesFiltrr(props.familles)
 },[]) 

 useEffect(async () => {
    const resultat = props.familles.filter((res) => {
        return res.nom.toLowerCase().match(search.toLowerCase());

    });
    setFamillesFiltrr(resultat);
    
}, [search]);
  
    
    return (
        <div className=''>        
        <DataTable
                    columns={columns}
                    data={familless}
                    pagination
                    fixedHeader
                    fixedHeaderScrollHeight='350px'
                    selectableRows
                    selectableRowsHighlight
                    subHeader                    
                    subHeaderComponent={
                        <input type="text"
                            placeholder='Recherche famille'
                            className='form-control w-25'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    }


                />
        </div>
    );
};

export default Tablee;
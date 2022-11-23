import React, { useState } from 'react';
import './statistique.scss'

const Statistique = () => {
    const [anneesMois, setAnneesMois] = useState('');
    return (
        <div className='statistique'>
            <div className='statMois'>
                <div className='moisTable'>
                    <div className='selectAnnees'>
                        <select name="" id="" value={anneesMois} onChange={setAnneesMois}>
                            <option value="">-----Annees----</option>
                            <option value="2022">2022</option>
                        </select>
                    </div>
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Janvier</th>
                                <th>Fervrier</th>
                                <th>Mars</th>
                                <th>Avril</th>
                                <th>Mai</th>
                                <th>Juin</th>
                                <th>Juillet</th>
                                <th>Aout</th>
                                <th>Septabre</th>
                                <th>Octobre</th>
                                <th>Novembre</th>
                                <th>Decembre</th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>
                <div className='moisDiagramme'>
                </div>
            </div>
            <div className='stat diagramme'>

            </div>
        </div>
    );
};

export default Statistique;
import React, { useState } from 'react';
import { Collapse } from 'reactstrap';

const Filter = () => {
    const backClick = () => {
        document.getElementById("filter").style.left = "-365px";
    }
    
    const [isBrandOpen, setIsBrandOpen] = useState(true);
    const toggleBrand = () => setIsBrandOpen(!isBrandOpen);

    return (
        <div className="collection-filter-block creative-card creative-inner">
            <div className="collection-mobile-back" onClick={backClick}>
                <span className="filter-back">
                    <i className="fa fa-angle-left" aria-hidden="true"></i>
                    Atrás
                </span>
            </div>
            <div className="collection-collapse-block border-0 open">
                <h3 className="collapse-block-title" onClick={toggleBrand}>Categotias</h3>
                <Collapse isOpen={isBrandOpen}>
                    <div className="collection-collapse-block-content">
                        <div className="collection-brand-filter">
                            <ul className="category-list">
                                <li><a href={null}>Tipos</a></li>
                                <li><a href={null}>Tipos</a></li>
                                <li><a href={null}>Tipos</a></li>
                            </ul>
                        </div>
                    </div>
                </Collapse>
            </div>
        </div>
    );
}


export default Filter;
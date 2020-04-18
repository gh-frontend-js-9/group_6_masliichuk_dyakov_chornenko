import React from "react";
import ReactPaginate from 'react-paginate';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';

export const ElementPaginate: React.FC = () => {

    return (
        <section className={'container-pagination'}>
            <div className={'pagination'}>
                <ReactPaginate marginPagesDisplayed={2} pageCount={9} pageRangeDisplayed={1}
                               hrefBuilder={(page) => '/' }
                               previousLabel={<FontAwesomeIcon icon={faChevronLeft}/>}
                               nextLabel={<FontAwesomeIcon icon={faChevronRight}/>}/>

            </div>
        </section>
    )
}
import React from 'react';
import { useParams} from 'react-router-dom';

const SingleLIN = ({ data }) => {
    const { LINparam } = useParams();
    const item = data.find(p => p.LIN === LINparam); 

    //console.log(item["LIN"]);
    
    return (
        <>
            <h2>{item.LIN} - {item.LIN_Description}</h2>

            <ul>
                {item.NSN_List.map(NSN =>
                    <li key={NSN.NSN}>
                        NSN: {NSN.NSN} ({NSN.NSN_Description})
                        <br/><br/> 

                        <ul>
                            {NSN.SN_List.map(SN =>
                                <>
                                    <li key={SN.SN}>
                                        SN: {SN.SN}
                                    </li>
                                    <li key={`${SN.SN}SLOC`}>
                                        SLOC: {SN.SLOC}
                                    </li>
                                    <br/>
                                </>
                            )}
                        </ul>
                    </li>
                )}
            </ul>
        </>
    )
}

export default SingleLIN;
import { createContext, useState, useEffect} from "react";

const MediaContext = createContext();

const MediaContextProvider = ({ children }) => {

    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 1000px)").matches
    )
    const [mobile, setMobile] = useState(
        window.matchMedia("(min-width: 700px)").matches
    )
    useEffect(() => {
        window
        .matchMedia("(min-width: 1000px)")
        .addEventListener('change', e => setMatches( e.matches ));
        window
        .matchMedia("(min-width: 700px)")
        .addEventListener('change', e => setMobile( e.matches ));
        return ()=>{
            window
            .matchMedia("(min-width: 1000px)")
            .removeEventListener('change', e => setMatches( e.matches ));
            window
            .matchMedia("(min-width: 700px)")
            .removeEventListener('change', e => setMobile( e.matches ));
        }
    }, []);

    const value = { matches, mobile }
    return (
        <MediaContext.Provider value={value}>
            {children}
        </MediaContext.Provider>
    );
};

export { MediaContext, MediaContextProvider };
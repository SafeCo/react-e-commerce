import { createContext, useState, useEffect} from "react";

const MediaContext = createContext();

const MediaContextProvider = ({ children }) => {

    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 1000px)").matches
    )
    useEffect(() => {
        window
        .matchMedia("(min-width: 1000px)")
        .addEventListener('change', e => setMatches( e.matches ));
        return ()=>{
            window
            .matchMedia("(min-width: 1000px)")
            .removeEventListener('change', e => setMatches( e.matches ));
        }
    }, []);

    const value = { matches }
    return (
        <MediaContext.Provider value={value}>
            {children}
        </MediaContext.Provider>
    );
};

export { MediaContext, MediaContextProvider };
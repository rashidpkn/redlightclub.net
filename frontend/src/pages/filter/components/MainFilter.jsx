import { useDispatch } from "react-redux"
import { setAge, setEye, setHair, setNationality, setPrice } from "../../../redux/slice/filterSlice"
import { setShowFilter } from "../../../redux/slice/utilSlice"
import Nationality from "../../newAds/components/Nationality"

const MainFilter = () => {
    const dispatch = useDispatch()
    return (
        <div className="filtermenu w-full h-[57px]  hidden lg:flex justify-between items-center gap-[27px] text-white">
            <select
                onChange={e=>{
                    const {value} = e.target
                    console.log(value);
                    if(Number(value)===1){dispatch(setPrice({from:1,to:1000}))}
                    if(Number(value)===2){dispatch(setPrice({from:1000,to:2000}))}
                    if(Number(value)===3){dispatch(setPrice({from:2000,to:3000}))}
                    if(Number(value)===4){dispatch(setPrice({from:3000,to:4000}))}
                    if(Number(value)===5){dispatch(setPrice({from:4000,to:5000}))}
                }}

            className="bg-[#17191E] w-[155px] h-[27px] rounded-lg outline-none">
                <option value="">Select Price Range</option>
                <option value={1}>1 - 1000</option>
                <option value={2}>1000 - 2000</option>
                <option value={3}>2000 - 3000</option>
                <option value={4}>3000 - 4000</option>
                <option value={5}>4000 - 5000</option>
            </select>
            <select onChange={e=>dispatch(setNationality(e.target.value))} className="bg-[#17191E] w-[155px] h-[27px] rounded-lg outline-none">
                <Nationality color={'white'} />
            </select>
            <select className="bg-[#17191E] w-[155px] h-[27px] rounded-lg outline-none">
                <option value="">Select Language</option>
                <option value="Afrikaans">Afrikaans</option>
                <option value="Albanian">Albanian</option>
                <option value="Arabic">Arabic</option>
                <option value="Armenian">Armenian</option>
                <option value="Bosnian">Bosnian</option>
                <option value="Bulgarian">Bulgarian</option>
                <option value="Chinese (Cantonese)">Chinese (Cantonese)</option>
                <option value="Chinese (Mandarin)">Chinese (Mandarin)</option>
                <option value="Croatian">Croatian</option>
                <option value="Czech">Czech</option>
                <option value="Danish">Danish</option>
                <option value="Dutch">Dutch</option>
                <option value="English">English</option>
                <option value="Estonian">Estonian</option>
                <option value="Filipino">Filipino</option>
                <option value="Finnish">Finnish</option>
                <option value="French">French</option>
                <option value="Georgian">Georgian</option>
                <option value="German">German</option>
                <option value="Greek">Greek</option>
                <option value="Hebrew">Hebrew</option>
                <option value="Hindi">Hindi</option>
                <option value="Hungarian">Hungarian</option>
                <option value="Indonesian">Indonesian</option>
                <option value="Icelandic">Icelandic</option>
                <option value="Italian">Italian</option>
                <option value="Japanese">Japanese</option>
                <option value="Korean">Korean</option>
                <option value="Lebanese">Lebanese</option>
                <option value="Lithuanian">Lithuanian</option>
                <option value="Latvian">Latvian</option>
                <option value="Malaysian">Malaysian</option>
                <option value="Moldovan">Moldovan</option>
                <option value="Mongolian">Mongolian</option>
                <option value="Moroccan">Moroccan</option>
                <option value="Norwegian">Norwegian</option>
                <option value="Persian">Persian</option>
                <option value="Polish">Polish</option>
                <option value="Portuguese">Portuguese</option>
                <option value="Romanian">Romanian</option>
                <option value="Russian">Russian</option>
                <option value="Serbian">Serbian</option>
                <option value="Slovak">Slovak</option>
                <option value="Slovenian">Slovenian</option>
                <option value="Somali">Somali</option>
                <option value="Southern Sotho">Southern Sotho</option>
                <option value="Spanish">Spanish</option>
                <option value="Swedish">Swedish</option>
                <option value="Taiwanese">Taiwanese</option>
                <option value="Thai">Thai</option>
                <option value="Turkish">Turkish</option>
                <option value="Ukrainian">Ukrainian</option>
                <option value="Urdu">Urdu</option>
                <option value="Vietnamese">Vietnamese</option>
                <option value="Zulu">Zulu</option>
            </select>
            <select onChange={e => {
                        const { value } = e.target
                        dispatch(setAge(value))
                    }
                    } className="bg-[#17191E] w-[155px] h-[27px] rounded-lg outline-none">
                <option value="">Select Age</option>
                <option value={1}>18 - 25</option>
                <option value={2}>25 - 30</option>
                <option value={3}>30 - 35</option>
                <option value={4}>35 - 40</option>
            </select>
            <select onChange={e=>dispatch(setEye(e.target.value))} className="bg-[#17191E] w-[155px] h-[27px] rounded-lg outline-none">
                <option value="">Select Eye</option>
                <option value="Brown">Brown</option>
                <option value="Blue">Blue</option>
                <option value="Hazel">Hazel</option>
                <option value="Amber">Amber</option>
                <option value="Green">Green</option>
                <option value="Gray">Gray</option>
            </select>
            <select onChange={e=>{dispatch(setHair(e.target.value))}} className="bg-[#17191E] w-[155px] h-[27px] rounded-lg outline-none">
                <option value="">Select Hair</option>
                <option value="Black">Black</option>
                <option value="Brown">Brown</option>
                <option value="Blond">Blond</option>
                <option value="White/Gray">White/Gray</option>
                <option value="Red">Red</option>
            </select>
            <button className="bg-[#17191E] w-[27px] h-[27px] rounded-lg" onClick={() => { dispatch(setShowFilter()) }}>+</button>
            <button className="bg-[#006EF8] w-[94px] h-[27px] rounded-lg">Search</button>
        </div>
    )
}
export default MainFilter
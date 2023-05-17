import React from 'react'

function FilterBar() {
    return (
        <div className="hidden lg:flex px-12 justify-center items-center w-full gap-3 text-white flex-wrap">
            <select className='w-52 h-10  rounded-md bg-transparent outline-none' name="" id="">
                <option className='text-black' value="">Select Price Range</option>
                <option className='text-black' value={1}>1 - 1000</option>
                <option className='text-black' value={2}>1000 - 2000</option>
                <option className='text-black' value={3}>2000 - 3000</option>
                <option className='text-black' value={4}>3000 - 4000</option>
                <option className='text-black' value={5}>4000 - 5000</option>
            </select>
            <select className='w-52 h-10  rounded-md bg-transparent outline-none' name="" id="">
                <option className='text-black' value="">Select Language</option>
                <option className='text-black' value="Afrikaans">Afrikaans</option>
                <option className='text-black' value="Albanian">Albanian</option>
                <option className='text-black' value="Arabic">Arabic</option>
                <option className='text-black' value="Armenian">Armenian</option>
                <option className='text-black' value="Bosnian">Bosnian</option>
                <option className='text-black' value="Bulgarian">Bulgarian</option>
                <option className='text-black' value="Chinese (Cantonese)">Chinese (Cantonese)</option>
                <option className='text-black' value="Chinese (Mandarin)">Chinese (Mandarin)</option>
                <option className='text-black' value="Croatian">Croatian</option>
                <option className='text-black' value="Czech">Czech</option>
                <option className='text-black' value="Danish">Danish</option>
                <option className='text-black' value="Dutch">Dutch</option>
                <option className='text-black' value="English">English</option>
                <option className='text-black' value="Estonian">Estonian</option>
                <option className='text-black' value="Filipino">Filipino</option>
                <option className='text-black' value="Finnish">Finnish</option>
                <option className='text-black' value="French">French</option>
                <option className='text-black' value="Georgian">Georgian</option>
                <option className='text-black' value="German">German</option>
                <option className='text-black' value="Greek">Greek</option>
                <option className='text-black' value="Hebrew">Hebrew</option>
                <option className='text-black' value="Hindi">Hindi</option>
                <option className='text-black' value="Hungarian">Hungarian</option>
                <option className='text-black' value="Indonesian">Indonesian</option>
                <option className='text-black' value="Icelandic">Icelandic</option>
                <option className='text-black' value="Italian">Italian</option>
                <option className='text-black' value="Japanese">Japanese</option>
                <option className='text-black' value="Korean">Korean</option>
                <option className='text-black' value="Lebanese">Lebanese</option>
                <option className='text-black' value="Lithuanian">Lithuanian</option>
                <option className='text-black' value="Latvian">Latvian</option>
                <option className='text-black' value="Malaysian">Malaysian</option>
                <option className='text-black' value="Moldovan">Moldovan</option>
                <option className='text-black' value="Mongolian">Mongolian</option>
                <option className='text-black' value="Moroccan">Moroccan</option>
                <option className='text-black' value="Norwegian">Norwegian</option>
                <option className='text-black' value="Persian">Persian</option>
                <option className='text-black' value="Polish">Polish</option>
                <option className='text-black' value="Portuguese">Portuguese</option>
                <option className='text-black' value="Romanian">Romanian</option>
                <option className='text-black' value="Russian">Russian</option>
                <option className='text-black' value="Serbian">Serbian</option>
                <option className='text-black' value="Slovak">Slovak</option>
                <option className='text-black' value="Slovenian">Slovenian</option>
                <option className='text-black' value="Somali">Somali</option>
                <option className='text-black' value="Southern Sotho">Southern Sotho</option>
                <option className='text-black' value="Spanish">Spanish</option>
                <option className='text-black' value="Swedish">Swedish</option>
                <option className='text-black' value="Taiwanese">Taiwanese</option>
                <option className='text-black' value="Thai">Thai</option>
                <option className='text-black' value="Turkish">Turkish</option>
                <option className='text-black' value="Ukrainian">Ukrainian</option>
                <option className='text-black' value="Urdu">Urdu</option>
                <option className='text-black' value="Vietnamese">Vietnamese</option>
                <option className='text-black' value="Zulu">Zulu</option>
            </select>
            <select className='w-36 h-10  rounded-md bg-transparent outline-none' name="" id="">
                <option className='text-black' value="">Select Age</option>
                <option className='text-black' value={1}>18 - 25</option>
                <option className='text-black' value={2}>25 - 30</option>
                <option className='text-black' value={3}>30 - 35</option>
                <option className='text-black' value={4}>35 - 40</option>
            </select>
            <select className='w-52 h-10  rounded-md bg-transparent outline-none' name="" id="">
                <option className='text-black' value="">Select Eye Color</option>
                <option className='text-black' value="Brown">Brown</option>
                <option className='text-black' value="Blue">Blue</option>
                <option className='text-black' value="Hazel">Hazel</option>
                <option className='text-black' value="Amber">Amber</option>
                <option className='text-black' value="Green">Green</option>
                <option className='text-black' value="Gray">Gray</option>
            </select>
            <select className='w-52 h-10  rounded-md bg-transparent outline-none' name="" id="">
                <option className='text-black' value="">Select Hair Color</option>
                <option className='text-black' value="Black">Black</option>
                <option className='text-black' value="Brown">Brown</option>
                <option className='text-black' value="Blond">Blond</option>
                <option className='text-black' value="White/Gray">White/Gray</option>
                <option className='text-black' value="Red">Red</option>
            </select>
            <button className='h-10 px-12 bg-[#ff0000]  rounded-md'>Search</button>
            <button className='text-[#f00]'>Advanced Search</button>
        </div>
    )
}

export default FilterBar
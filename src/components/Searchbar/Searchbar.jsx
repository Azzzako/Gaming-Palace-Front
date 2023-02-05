import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getArray } from "../../Redux/Actions/actions";
import './Searchbar.css'

export const Searchbar = () => {

    const [word, setWord] = useState("")
    const [filter1, setFilter1] = useState('empty')
    const [filter2, setFilter2] = useState('empty')
    const [order, setOrder] = useState('empty')

    const dispatch = useDispatch()

    const handleSearch = (e) => {
        e.preventDefault()
        const obj = {
            word: word,
            filter1: filter1, //Logitech
            filter2: filter2,
            order: order
        }
        dispatch(getArray(obj))
        console.log(obj);
    }

    const resetFilters = () => {
        setWord("")
        setFilter1("empty")
        setFilter2("empty")
        setOrder("empty")
    }

    console.log(filter1);




    return (
        <form className="search__container"
            onSubmit={handleSearch}
        >
            <label className="label_search">Search Product</label>
            <input type="text" placeholder="Search..."
                onChange={(e) => setWord(e.target.value)}
                value={word}
            />


            <select
                onChange={(e) => setFilter1(e.target.value)}
                option="first"
                selected="true"
            >
                <option selected value="empty">Trademark</option>
                <option value="Gigabyte">Gigabyte</option>
                <option value="Zotac">Zotac</option>
                <option value="Asus">Asus</option>
                <option value="Radeon">Radeon</option>
                <option value="Msi">Msi</option>
                <option value="HP">HP</option>
                <option value="KOGAN">KOGAN</option>
                <option value="SAMSUNG">SAMSUNG</option>
                <option value="ONN">ONN</option>
                <option value="PANELLO">PANELLO</option>
                <option value="BELKIN">BELKIN</option>
                <option value="Amazon">Amazon</option>
                <option value="3M">3M</option>
                <option value="CORSAIR">CORSAIR</option>
                <option value="LOGITECH">LOGITECH</option>
                <option value="BANG JUICE">BANG JUICE</option>
                <option value="RAGE">RAGE</option>
                <option value="Marvo">Marvo</option>
                <option value="Redragon">Redragon</option>
                <option value="HyperX">HyperX</option>
                <option value="KeyChron">KeyChron</option>
                <option value="Fantech">Fantech</option>
                <option value="JBL">JBL</option>
                <option value="Kaze">Kaze</option>
                <option value="xigmatek">xigmatek</option>
                <option value="Aerocool">Aerocool</option>
                <option value="Masterfan">Masterfan</option>
                <option value="Sickleflow">Sickleflow</option>
                <option value="Corsair">Corsair</option>
                <option value="Thermaltake">Thermaltake</option>
                <option value="Intel">Intel</option>
                <option value="Ryzen">Ryzen</option>
                <option value="SteelSeries">SteelSeries</option>
                <option value="Lenovo">Lenovo</option>


            </select>

            <select onChange={(e) => setFilter2(e.target.value)}>
                <option selected value="">Categories</option>
                <option value="Powerbank">Powerbank</option>
                <option value="wireless network card">Wireless Network Cards</option>
                <option value="videocard">Videocards</option>
                <option value="Harddrive">Hard Drives</option>
                <option value="Monitor">Monitors</option>
                <option value="Mouse pad">Mouse Pads</option>
                <option value="coolers">Coolers</option>
                <option value="processors">Processors</option>
                <option value="mouse">Mouse</option>
                <option value="motherboard">Motherboards</option>
                <option value="Tower">Case</option>
                <option value="SSD">SSD</option>
                <option value="GAMING CHAIR">Gaming Chairs</option>
                <option value="keyboard">Keyboards</option>
                <option value="Headset">Headset</option>
            </select>

            <select onChange={(e) => setOrder(e.target.value)}>
                <option value="">Sort</option>
                <option value="nameup">↕A - Z↕</option>
                <option value="namedown">↕Z - A↕</option>
                <option value="priceup">$$$</option>
                <option value="pricedown">$</option>
            </select>

            <input type="submit"
                value="Aply filters"
            />

            <button
                onClick={() => resetFilters()}
            >
                Reset filters
            </button>

        </form>
    )
}

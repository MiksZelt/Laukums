function nolasa(m1, m2, m3) {
    const malas = document.getElementsByClassName("mala");
    m1 = parseFloat(mala1.value);
    m2 = parseFloat(mala2.value);
    m3 = parseFloat(mala3.value);

    if (m1 > 0 && m2 > 0 && m3 > 0) {
        console.log({ m1, m2, m3 });
        return { m1, m2, m3 };
    } else {
        console.log(false);
        return false;
    }

}

function perimetrs(m1, m2, m3) {
    const m = nolasa();
    m1 = m.m1; m2 = m.m2; m3 = m.m3;
    const p = m1 + m2 + m3;
    console.log(p);
    return (p);
}

function pusper(m1, m2, m3) {
    const pu = perimetrs(m1 + m2 + m3) / 2;
    console.log(pu);
    return (pu);
}

function laukums(m1, m2, m3) {
    const pu = perimetrs(m1 + m2 + m3) / 2;
    let S = Math.sqrt(pu * ((pu - m1) * (pu - m2) * (pu - m3)));
    console.log(S);
    return S;
}

function irTrij(m1, m2, m3) {
    if (m1 < m2 + m3 && m2 < m1 + m3 && m3 < m1 + m2) {
        return true;
    } else {
        return false;
    }
}

function rezultats() {
    const m = nolasa();
    m1 = m.m1; m2 = m.m2; m3 = m.m3;
    console.log(m1, m2, m3);
    if (!nolasa()) {
        t = "Nekorekti ievaddati, trijstūra malu vērtībām ir jābūt lielākām par 0."
    } else {
        if (irTtrij(m1, m2, m3) == false) {
            t = "Trijtūris neeksistē";
        } else {
            t = "Trijstūris ar malu garumiem" + m1 + "," + m2 + "," + m3 + " eksistē."
            if (m1 == m2 && m2 == m3) {
                t += "Vienādmalu trijstūris."
            } else {
                if (m1 == m2 || m2 == m3 || m1 == m3) {
                    t += "Tas ir vienādsānu trijstūris."
                }
            }
        }
    }
}



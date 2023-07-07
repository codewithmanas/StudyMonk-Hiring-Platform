
function Header() {
  return (
    <header className="header container">
        <nav className="navbar">
            <h1 className="page__logo">StudyMonk</h1>
            <ul className="nav__menu">
                <li className="nav__list"><a href="#">About</a></li>
                <li className="nav__list"><a href="#">Features</a></li>
                <li className="nav__list"><a href="#">Pricing</a></li>
            </ul>

            <div className="contact__us">Contact Us</div>
        </nav>

        <section className="hero">
            <div className="hero__left">
                <div className="hero__left__subtitle">Efficient Talent Acquisition</div>
                <h1 className="hero__left__heading">
                Revolutionize Your Hiring Process
                </h1>
                <div className="explore__btn">Explore Now</div>
            </div>
            <div className="hero__right">
                <svg className="hero__image" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="697.96287" height="631.46323" viewBox="0 0 697.96287 631.46323"><path d="M556.0722,656.52032H264.84766a13.84469,13.84469,0,0,1-13.82909-13.8291V247.34171a13.84468,13.84468,0,0,1,13.82909-13.82909H556.0722a13.84468,13.84468,0,0,1,13.82909,13.82909V642.69122A13.84469,13.84469,0,0,1,556.0722,656.52032Z" transform="translate(-251.01857 -134.26838)" fill="#fff"/><path d="M397.33163,336.40339a54.10671,54.10671,0,0,1-37.34148,51.44415c-.32462.10327-.649.20652-.97865.30487-1.40626.43272-2.83221.80151-4.28289,1.11622a53.17173,53.17173,0,0,1-7.97083,1.10638q-1.7478.118-3.51578.118a53.99524,53.99524,0,0,1-17.88405-3.029c-.16711-.059-.33422-.118-.49653-.177a54.09488,54.09488,0,1,1,72.47021-50.88358Z" transform="translate(-251.01857 -134.26838)" fill="#fff"/><circle cx="90.92753" cy="211.65492" r="26.31665" fill="#5effd5"/><path d="M343.48246,360.10265l.02737-.98345c-1.82956-.0509-3.44255-.16567-4.65457-1.05116a3.02308,3.02308,0,0,1-1.171-2.22668,1.72809,1.72809,0,0,1,.56687-1.42331,2.97858,2.97858,0,0,1,3.04278-.02689l.8137.37311L340.54724,343.361l-.97432.1335,1.32727,9.7a3.47153,3.47153,0,0,0-3.28384.47252,2.69019,2.69019,0,0,0-.91478,2.20891,3.999,3.999,0,0,0,1.57361,2.98636C339.83247,360.00036,341.85627,360.057,343.48246,360.10265Z" transform="translate(-251.01857 -134.26838)" fill="#2f2e41"/><rect x="78.4392" y="210.0626" width="5.2966" height="0.98345" fill="#2f2e41"/><rect x="95.15781" y="210.0626" width="5.2966" height="0.98345" fill="#2f2e41"/><path d="M349.42289,382.71394a4.81423,4.81423,0,0,0,.10828-.98345,4.67877,4.67877,0,0,0-4.67138-4.67137h-6.88413a4.67553,4.67553,0,0,0-4.67138,4.67137,4.54308,4.54308,0,0,0,.108.98837,26.42417,26.42417,0,0,0-7.28222,3.60435c-.4329.29994-.86052.62447-1.26869.96376.16231.059.32942.118.49653.177a53.99524,53.99524,0,0,0,17.88405,3.029q1.77014,0,3.51578-.118a53.17173,53.17173,0,0,0,7.97083-1.10638c1.45068-.31471,2.87663-.6835,4.28289-1.11622A26.65042,26.65042,0,0,0,349.42289,382.71394Z" transform="translate(-251.01857 -134.26838)" fill="#2f2e41"/><path d="M348.53788,389.75051a3.61831,3.61831,0,0,0-1.7801.6245,53.17173,53.17173,0,0,0,7.97083-1.10638Z" transform="translate(-251.01857 -134.26838)" fill="#2f2e41"/><path d="M365.81368,339.6717,320.0962,322.94689a1.96691,1.96691,0,0,1-1.17142-2.52292l.15466-.73121c3.57044-9.75984,15.40471-15.90222,25.16455-12.33178l14.06831,5.14661c9.75984,3.57044,14.00169,15.12739,10.43125,24.88723l-.407,1.10546A1.96689,1.96689,0,0,1,365.81368,339.6717Z" transform="translate(-251.01857 -134.26838)" fill="#2f2e41"/><path d="M368.27632,340.59973c-63.72122,2.35119-69.28913-5.65524-49.87372-18.24525l4.11891-7.579L369.727,331.98586Z" transform="translate(-251.01857 -134.26838)" fill="#2f2e41"/><ellipse cx="351.77908" cy="310.10415" rx="2.21276" ry="4.17965" transform="translate(-297.48335 423.45428) rotate(-73.26954)" fill="#2f2e41"/><path d="M343.242,391.96819a55.43048,55.43048,0,0,1-18.37181-3.11193l-.51322-.183a55.56481,55.56481,0,1,1,36.08925.5772c-.34947.11117-.6784.21561-1.01262.31549-1.39666.42978-2.87844.81586-4.39238,1.14408a54.76309,54.76309,0,0,1-8.1928,1.13711C345.66449,391.92737,344.44814,391.96819,343.242,391.96819Zm0-108.17925a52.62192,52.62192,0,0,0-17.87961,102.11049l.48716.17359a52.47405,52.47405,0,0,0,17.39245,2.94483c1.14012,0,2.28947-.03866,3.41626-.11477a51.87031,51.87031,0,0,0,7.75846-1.07637c1.432-.31045,2.83209-.6754,4.161-1.084.32906-.09844.64143-.19784.95392-.29724A52.62185,52.62185,0,0,0,343.242,283.78894Z" transform="translate(-251.01857 -134.26838)" fill="#ccc"/><path d="M269.60682,502.682" transform="translate(-251.01857 -134.26838)" fill="#f2f2f2"/><path d="M556.0722,656.52032H264.84766a13.84469,13.84469,0,0,1-13.82909-13.8291V247.34171a13.84468,13.84468,0,0,1,13.82909-13.82909H556.0722a13.84468,13.84468,0,0,1,13.82909,13.82909V642.69122A13.84469,13.84469,0,0,1,556.0722,656.52032ZM264.84766,235.13957a12.216,12.216,0,0,0-12.20214,12.20214V642.69122a12.216,12.216,0,0,0,12.20214,12.20215H556.0722a12.216,12.216,0,0,0,12.20214-12.20215V247.34171a12.216,12.216,0,0,0-12.20214-12.20214Z" transform="translate(-251.01857 -134.26838)" fill="#ccc"/><path d="M499.6946,336.19285H417.28808a6.5193,6.5193,0,0,1,0-13.03859H499.6946a6.5193,6.5193,0,1,1,0,13.03859Z" transform="translate(-251.01857 -134.26838)" fill="#e6e6e6"/><path d="M526.58668,358.19546H417.28808a6.5193,6.5193,0,0,1,0-13.03859h109.2986a6.5193,6.5193,0,0,1,0,13.03859Z" transform="translate(-251.01857 -134.26838)" fill="#e6e6e6"/><path d="M499.57463,442.5846H294.33318a6.5193,6.5193,0,1,1,0-13.03859H499.57463a6.5193,6.5193,0,0,1,0,13.03859Z" transform="translate(-251.01857 -134.26838)" fill="#e6e6e6"/><path d="M526.4667,464.58721H294.33318a6.5193,6.5193,0,1,1,0-13.03859H526.4667a6.5193,6.5193,0,1,1,0,13.03859Z" transform="translate(-251.01857 -134.26838)" fill="#e6e6e6"/><path d="M499.57463,515.15764H294.33318a6.51929,6.51929,0,1,1,0-13.03858H499.57463a6.51929,6.51929,0,0,1,0,13.03858Z" transform="translate(-251.01857 -134.26838)" fill="#e6e6e6"/><path d="M526.4667,537.16025H294.33318a6.51929,6.51929,0,1,1,0-13.03858H526.4667a6.51929,6.51929,0,1,1,0,13.03858Z" transform="translate(-251.01857 -134.26838)" fill="#e6e6e6"/><path d="M499.57463,587.73069H294.33318a6.51929,6.51929,0,1,1,0-13.03858H499.57463a6.51929,6.51929,0,0,1,0,13.03858Z" transform="translate(-251.01857 -134.26838)" fill="#e6e6e6"/><path d="M526.4667,609.7333H294.33318a6.51929,6.51929,0,1,1,0-13.03858H526.4667a6.51929,6.51929,0,1,1,0,13.03858Z" transform="translate(-251.01857 -134.26838)" fill="#e6e6e6"/><path d="M935.15235,557.27608l-291.22453.00024a13.84468,13.84468,0,0,1-13.82911-13.82908l-.00033-395.34951a13.84469,13.84469,0,0,1,13.82909-13.82911l291.22453-.00024a13.84469,13.84469,0,0,1,13.82911,13.82909l.00032,395.34951A13.84467,13.84467,0,0,1,935.15235,557.27608Z" transform="translate(-251.01857 -134.26838)" fill="#fff"/><path d="M935.15235,557.27608l-291.22453.00024a13.84468,13.84468,0,0,1-13.82911-13.82908l-.00033-395.34951a13.84469,13.84469,0,0,1,13.82909-13.82911l291.22453-.00024a13.84469,13.84469,0,0,1,13.82911,13.82909l.00032,395.34951A13.84467,13.84467,0,0,1,935.15235,557.27608ZM643.92747,135.89557a12.216,12.216,0,0,0-12.20214,12.20216l.00033,395.3495a12.216,12.216,0,0,0,12.20215,12.20214l291.22454-.00024A12.216,12.216,0,0,0,947.35448,543.447l-.00032-395.34951A12.216,12.216,0,0,0,935.152,135.89534Z" transform="translate(-251.01857 -134.26838)" fill="#ccc"/><path d="M776.5482,236.62033a54.08962,54.08962,0,1,1-54.08967-54.08959A54.10671,54.10671,0,0,1,776.5482,236.62033Z" transform="translate(-251.01857 -134.26838)" fill="#fff"/><path d="M747.45785,245.87561c-.59076,34.5932-52.04749,34.58783-52.63325-.00107C695.41532,211.28245,746.872,211.28783,747.45785,245.87561Z" transform="translate(-251.01857 -134.26838)" fill="#5effd5"/><path d="M720.09657,256.61291l-.02737-.98345c6.77815.905,8.2379-7.49552,1.40218-4.35492l1.56039-11.40329.97433.13349-1.32726,9.7C729.87629,248.63339,727.214,257.59577,720.09657,256.61291Z" transform="translate(-251.01857 -134.26838)" fill="#2f2e41"/><rect x="477.80609" y="106.57286" width="5.2966" height="0.98345" fill="#2f2e41"/><rect x="461.08748" y="106.57287" width="5.2966" height="0.98345" fill="#2f2e41"/><path d="M729.67216,282.67032c1.03266-6.96775-7.125-5.5909-11.44243-5.65974a4.68023,4.68023,0,0,0-4.56309,5.65483,25.58847,25.58847,0,0,0-9.09208,5.01559,54.32367,54.32367,0,0,0,34.6322.38351A25.45685,25.45685,0,0,0,729.67216,282.67032Z" transform="translate(-251.01857 -134.26838)" fill="#2f2e41"/><path d="M708.7686,233.42855c4.87711-2.81868,10.79159-.65626,15.82946.526,9.55827,2.93829,22.962-.74109,24.12429-12.12714,1.20957-10.58923-13.27612-16.491-17.90609-5.95164l1.34812-.1762c-15.01567-22.31547-41.135-21.46913-40.96321,9.21072-.05567.94779,1.41969.94459,1.47487-.00057-.55282-18.07915,11.41221-30.43755,28.32579-18.8191a49.83115,49.83115,0,0,1,9.88878,10.3535c1.76146,1.974,2.14424-6.52733,10.57493-4.30063,9.27822,3.59448,6.25079,16.88013-2.04229,19.79671-10.24677,5.235-21.34437-4.915-31.39927.21394a.73844.73844,0,0,0,.74462,1.27441Z" transform="translate(-251.01857 -134.26838)" fill="#2f2e41"/><path d="M722.45862,292.18517a55.518,55.518,0,1,1,17.20421-2.7177A55.43053,55.43053,0,0,1,722.45862,292.18517Zm-.00009-108.17925A52.62192,52.62192,0,1,0,775.073,236.62033,52.674,52.674,0,0,0,722.45853,184.00592Z" transform="translate(-251.01857 -134.26838)" fill="#ccc"/><path d="M878.77449,236.94866l-82.40652.00007a6.51929,6.51929,0,0,1,0-13.03859l82.40652-.00006a6.51929,6.51929,0,1,1,0,13.03858Z" transform="translate(-251.01857 -134.26838)" fill="#e6e6e6"/><path d="M905.66659,258.95125l-109.2986.00009a6.5193,6.5193,0,1,1,0-13.03859l109.2986-.00009a6.51929,6.51929,0,0,1,0,13.03859Z" transform="translate(-251.01857 -134.26838)" fill="#e6e6e6"/><path d="M878.6546,343.34041l-205.24145.00017a6.5193,6.5193,0,0,1,0-13.03859l205.24145-.00016a6.51929,6.51929,0,1,1,0,13.03858Z" transform="translate(-251.01857 -134.26838)" fill="#e6e6e6"/><path d="M905.5467,365.343l-232.13353.00019a6.5193,6.5193,0,1,1,0-13.03859l232.13353-.00019a6.51929,6.51929,0,0,1,0,13.03859Z" transform="translate(-251.01857 -134.26838)" fill="#e6e6e6"/><path d="M878.65466,415.91346l-205.24145.00017a6.5193,6.5193,0,0,1,0-13.03859l205.24145-.00017a6.51929,6.51929,0,0,1,0,13.03859Z" transform="translate(-251.01857 -134.26838)" fill="#e6e6e6"/><path d="M905.54676,437.91605l-232.13353.00019a6.5193,6.5193,0,1,1,0-13.03859l232.13353-.00019a6.51929,6.51929,0,0,1,0,13.03859Z" transform="translate(-251.01857 -134.26838)" fill="#e6e6e6"/><path d="M878.65472,488.4865l-205.24145.00017a6.51929,6.51929,0,1,1,0-13.03858l205.24145-.00017a6.51929,6.51929,0,1,1,0,13.03858Z" transform="translate(-251.01857 -134.26838)" fill="#e6e6e6"/><path d="M905.54682,510.48909l-232.13353.00019a6.51929,6.51929,0,1,1,0-13.03858l232.13353-.00019a6.51929,6.51929,0,0,1,0,13.03858Z" transform="translate(-251.01857 -134.26838)" fill="#e6e6e6"/><path d="M759.44128,727.29276H468.21675a13.84469,13.84469,0,0,1-13.8291-13.8291V318.11416a13.84469,13.84469,0,0,1,13.8291-13.8291H759.44128a13.84469,13.84469,0,0,1,13.8291,13.8291v395.3495A13.84469,13.84469,0,0,1,759.44128,727.29276Z" transform="translate(-251.01857 -134.26838)" fill="#fff"/><path d="M492.50562,406.06388a53.92579,53.92579,0,0,0,15.90227,38.3102c.42306.418.85572.83593,1.29318,1.24407a54.01435,54.01435,0,0,0,8.58572,6.54484c.58992.36388,1.18009.713,1.7849,1.0523a53.78428,53.78428,0,0,0,9.77541,4.29274c.58512.19178,1.18009.37372,1.77506.54089a54.31267,54.31267,0,0,0,32.85714-.92442c.20649-.07377.413-.14754.61465-.22128a54.09429,54.09429,0,1,0-72.58833-50.83934Z" transform="translate(-251.01857 -134.26838)" fill="#fff"/><path d="M535.17257,432.57549a16.7613,16.7613,0,0,1-4.32915,11.347c-2.78119,3.05219-6.92159,5.07636-11.09981,4.23887-3.84733-.77116-6.97372-4.13377-6.58368-8.2017a6.07575,6.07575,0,0,1,7.507-5.45575c3.65482.94846,5.11106,6.21585,2.0655,8.68824-.73081.59327-1.78071-.44431-1.04311-1.0431a3.68416,3.68416,0,0,0-1.03874-6.1067,4.62957,4.62957,0,0,0-6.03027,4.09386c-.24123,3.42942,2.38594,6.01205,5.60772,6.6201,3.48529.65777,6.94084-1.12607,9.30247-3.5882a15.22129,15.22129,0,0,0,4.16685-10.59263.738.738,0,0,1,1.47517,0Z" transform="translate(-251.01857 -134.26838)" fill="#2f2e41"/><circle cx="298.55851" cy="281.36823" r="26.31665" fill="#5effd5"/><path d="M548.23067,426.86561l-.02737-.98344c1.82956-.05091,3.44254-.16567,4.65457-1.05116a3.02308,3.02308,0,0,0,1.171-2.22668,1.72808,1.72808,0,0,0-.56687-1.42331,2.97856,2.97856,0,0,0-3.04278-.02689l-.8137.37311,1.56041-11.40329.97432.1335-1.32727,9.7a3.47153,3.47153,0,0,1,3.28384.47252,2.69019,2.69019,0,0,1,.91478,2.20891,3.999,3.999,0,0,1-1.57361,2.98636C551.88066,426.76333,549.85686,426.82,548.23067,426.86561Z" transform="translate(-251.01857 -134.26838)" fill="#2f2e41"/><rect x="305.9402" y="276.82557" width="5.2966" height="0.98345" fill="#2f2e41"/><rect x="289.22159" y="276.82557" width="5.2966" height="0.98345" fill="#2f2e41"/><path d="M531.62216,458.04892a54.31267,54.31267,0,0,0,32.85714-.92442c.20649-.07377.413-.14754.61465-.22128a26.19511,26.19511,0,0,0-8.33481-4.30751,4.19325,4.19325,0,0,0-.00985-2.3111,4.651,4.651,0,0,0-4.49922-3.26506H545.838a4.63483,4.63483,0,0,0-4.48938,3.26013,4.21082,4.21082,0,0,0-.00984,2.316,26.222,26.222,0,0,0-7.43493,3.64367q-.68609.47945-1.32751,1.00313C532.2517,457.50311,531.93213,457.77355,531.62216,458.04892Z" transform="translate(-251.01857 -134.26838)" fill="#2f2e41"/><path d="M570.19319,412.84474c0,4.43536,2.18322,8.11345,5.02048,8.75271a4.05816,4.05816,0,0,0,.8802.09832c3.25023,0,5.90069-3.96821,5.90069-8.851a10.86875,10.86875,0,0,0-2.27182-6.97264,5.69356,5.69356,0,0,0-1.73592-1.41124,4.11422,4.11422,0,0,0-1.89295-.46715,4.3143,4.3143,0,0,0-2.51288.84578C571.57976,406.25566,570.19319,409.30925,570.19319,412.84474Z" transform="translate(-251.01857 -134.26838)" fill="#3f3d56"/><path d="M517.57873,412.84474c0,3.81579,1.61275,7.071,3.87473,8.31507a4.19952,4.19952,0,0,0,2.026.536,3.80084,3.80084,0,0,0,.472-.0295c3.02885-.35895,5.42865-4.17473,5.42865-8.82153,0-3.72235-1.53928-6.91363-3.71266-8.21668a4.21673,4.21673,0,0,0-2.188-.63435,4.11441,4.11441,0,0,0-1.89318.46715,5.72571,5.72571,0,0,0-1.74073,1.41617A10.88982,10.88982,0,0,0,517.57873,412.84474Z" transform="translate(-251.01857 -134.26838)" fill="#3f3d56"/><path d="M521.82146,420.31133a.73822.73822,0,0,0,.699-.97361,28.76517,28.76517,0,1,1,55.411-3.23294.73762.73762,0,0,0,1.44348.30445,30.24147,30.24147,0,1,0-58.25236,3.40005A.738.738,0,0,0,521.82146,420.31133Z" transform="translate(-251.01857 -134.26838)" fill="#3f3d56"/><path d="M562.79721,398.58574a3.688,3.688,0,0,1-.56959,4.56579c-1.4287,1.59585-3.707,1.69653-5.68522,1.40034-2.21979-.33237-4.57431-1.37236-6.82165-.67151-1.91544.59735-3.28185,2.33468-5.27182,2.77105-1.76481.387-3.87518-.12528-4.49385-2.00631-.29729-.9039,1.12675-1.29132,1.42248-.39216.40024,1.21691,2.1285,1.19265,3.11824.85566,1.58674-.54024,2.80958-1.85431,4.36916-2.482a9.56045,9.56045,0,0,1,5.70559.01564c1.76446.39733,3.79511.98642,5.55287.24422,1.30069-.54921,2.33562-2.27912,1.4-3.5562-.56165-.76665.71784-1.50339,1.27376-.74455Z" transform="translate(-251.01857 -134.26838)" fill="#2f2e41"/><path d="M546.59524,461.62868a55.46229,55.46229,0,0,1-15.382-2.16258c-.58759-.16495-1.205-.35294-1.82518-.55607a55.4155,55.4155,0,0,1-10.04-4.40919c-.59881-.3359-1.1999-.69028-1.8355-1.08212a55.612,55.612,0,0,1-8.81874-6.72279c-.44676-.41681-.88951-.84467-1.32241-1.272a55.56016,55.56016,0,1,1,58.22678,12.86574c-.20294.07419-.41291.1491-.62293.224A55.4364,55.4364,0,0,1,546.59524,461.62868Zm0-108.17925a52.61688,52.61688,0,0,0-37.1458,89.88006c.40817.40313.83075.8113,1.258,1.2101a52.66784,52.66784,0,0,0,8.3521,6.367c.60217.3712,1.1688.70518,1.73382,1.02211a52.44556,52.44556,0,0,0,9.50938,4.17629c.58392.19136,1.16088.36711,1.71833.52366a52.8369,52.8369,0,0,0,31.97052-.8963l.596-.21464a52.62112,52.62112,0,0,0-17.99234-102.06824Z" transform="translate(-251.01857 -134.26838)" fill="#ccc"/><path d="M759.44128,727.29276H468.21675a13.84469,13.84469,0,0,1-13.8291-13.8291V318.11416a13.84469,13.84469,0,0,1,13.8291-13.8291H759.44128a13.84469,13.84469,0,0,1,13.8291,13.8291v395.3495A13.84469,13.84469,0,0,1,759.44128,727.29276ZM468.21675,305.912a12.216,12.216,0,0,0-12.20214,12.20215v395.3495a12.216,12.216,0,0,0,12.20214,12.20215H759.44128a12.216,12.216,0,0,0,12.20215-12.20215V318.11416A12.216,12.216,0,0,0,759.44128,305.912Z" transform="translate(-251.01857 -134.26838)" fill="#3f3d56"/><path d="M703.06369,406.96529H620.65717a6.51929,6.51929,0,1,1,0-13.03858h82.40652a6.51929,6.51929,0,1,1,0,13.03858Z" transform="translate(-251.01857 -134.26838)" fill="#5effd5"/><path d="M729.95577,428.9679H620.65717a6.51929,6.51929,0,1,1,0-13.03858h109.2986a6.51929,6.51929,0,0,1,0,13.03858Z" transform="translate(-251.01857 -134.26838)" fill="#5effd5"/><path d="M702.94371,513.357H497.70226a6.51929,6.51929,0,0,1,0-13.03858H702.94371a6.51929,6.51929,0,0,1,0,13.03858Z" transform="translate(-251.01857 -134.26838)" fill="#ccc"/><path d="M729.83579,535.35965H497.70226a6.51929,6.51929,0,0,1,0-13.03858H729.83579a6.51929,6.51929,0,0,1,0,13.03858Z" transform="translate(-251.01857 -134.26838)" fill="#ccc"/><path d="M702.94371,585.93009H497.70226a6.5193,6.5193,0,0,1,0-13.03859H702.94371a6.51929,6.51929,0,0,1,0,13.03859Z" transform="translate(-251.01857 -134.26838)" fill="#ccc"/><path d="M729.83579,607.9327H497.70226a6.5193,6.5193,0,0,1,0-13.03859H729.83579a6.51929,6.51929,0,0,1,0,13.03859Z" transform="translate(-251.01857 -134.26838)" fill="#ccc"/><path d="M702.94371,658.50313H497.70226a6.51929,6.51929,0,0,1,0-13.03858H702.94371a6.51929,6.51929,0,0,1,0,13.03858Z" transform="translate(-251.01857 -134.26838)" fill="#ccc"/><path d="M729.83579,680.50574H497.70226a6.51929,6.51929,0,0,1,0-13.03858H729.83579a6.51929,6.51929,0,1,1,0,13.03858Z" transform="translate(-251.01857 -134.26838)" fill="#ccc"/><path d="M756.06216,637.26838a64.2316,64.2316,0,1,0-.00044,128.46312h.00044a64.23166,64.23166,0,0,0,0-128.46312Z" transform="translate(-251.01857 -134.26838)" fill="#5effd5"/><path id="ba2462e0-2d61-4715-874d-575d790dfdd0-56" data-name="f276b720-7c73-4755-84a7-b208d54eb1fc" d="M749.96756,728.17569a7.79562,7.79562,0,0,1-4.68966-1.55861l-.084-.06287-17.66375-13.5121a7.84966,7.84966,0,0,1,9.55173-12.45925l11.44118,8.77354,27.03609-35.27147A7.84631,7.84631,0,0,1,786.56,672.6317l.00015.00014.00223.00164-.1678.233.17226-.233a7.85576,7.85576,0,0,1,1.4513,11.003L756.21792,725.105a7.85071,7.85071,0,0,1-6.24352,3.0612Z" transform="translate(-251.01857 -134.26838)" fill="#fff"/></svg>
            </div>
        </section>
    </header>
  )
}

export default Header;
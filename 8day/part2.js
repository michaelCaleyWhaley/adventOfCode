const input = [
  "fceabd decba debgf acgefb cfedb ecf fdgaceb acfd fc gdbaec | cedbag cdeabf fdca bgadec",
  "bdacgf badcfe egdfca dgc dgab fcbge gd cdafb fgdbeca fcgbd | dgc gcdfae bcdfa fbaecgd",
  "fbacg befdcg gbced agdcb dcgaeb fdebag dab dgfaebc adce ad | ad cegadb adgcbe dcebg",
  "degb cfagedb fgdea fgabc eb fegadc dfaceb eab gbefa dgaebf | aeb bgeaf bfagc fbagc",
  "cedgfb gcafb fdcaebg cefgb gfae cbaegf cbdfa agb ag cgdeba | ga geaf bdcgef facegb",
  "ab adfeb abf fedcb agfdce efcabdg fabedg fegbac adbg aegfd | efacdg ebdfa dfaeb fegdba",
  "gd bgfdc cdaefg cdagbf fbedc gefabc gdfebca gbafc cdg bdga | gd agfcb adbgcf eacgdbf",
  "gba gabefdc fcbdge aebc ba gedbc cagbde ebagd daefg dgafbc | dgcaefb fbagdc adebg gdcebf",
  "dfage bcfead ef cdega afbcegd dgaefb fgeb bfgdca def afbdg | gdebaf fe gefda egfbad",
  "bgfea acdgb cbfga cfa bgaecd fcdb bcfgade cf bdafgc dcegaf | facdgbe afgbc abfcg cbfd",
  "dea cfadgeb ebfadc fgdab agedf fbgaec fecag ed aegcfd gced | aegdf fbdeca dea aecgf",
  "bfa dcba gcbafd fcebga ab ecafdg dfagb cafgd debgf agdecbf | dgbafc fba dabc abf",
  "dagef adecf fdgeca afc egafcbd deabc fc cefg gfdcab bfgade | caf fca acfbdge gbdecfa",
  "ge fgdecab aefbgd dgec cfagde fabec gfe gcafe cadbgf cdfga | cegd gdce egdc fedabg",
  "gfe cadebg cegdb ebfd dbgcfe efbcga dfgce dabecfg fe dcfga | fbed bdcaefg cfabge bdef",
  "aebfc agbfcd cfebdga bagcde bafde gdef ebfdga baged fd adf | fd eagbd dfeg cfgabd",
  "ea cafgbd eagdc aed cdbge egaf gefcda fdcabe bdgacfe dcfga | aefbdc ea bdgacf acgde",
  "gcedb gabfd eag afegdb befa dfgacb edagbfc gbade agdcfe ea | ega acgfbd agdfeb bgade",
  "cagbde bfdcga edg efcgad eabfg cbdag de cfbgaed gdaeb cebd | agbfe de edcb badgfc",
  "fdcabge cgbd bgfec ced bfdec acfdeg cagbfe cd dcgbef beadf | afdbe dgbcfe gfecdba cbgfe",
  "gcefb fcde bgefd gdf gdecfb dcgefab acefbg fd aegbd gcbafd | dfg ebgdf gfd fecd",
  "dcbfa dgecbaf bg gbc fgcbde dcebaf fgacdb abdgc adcge bfag | gb gcebfd fecdbg gcfbed",
  "ceagbd abfcd gfdab gdb fecbagd feacbd dgcf dg befag cbdafg | gcaedbf dg gfcaedb dg",
  "daecg gbce gdafcbe cae gadcb ce afedg facedb fadbgc ecgbda | ec acbfegd aegdc adbecg",
  "dgebc eafgb gbdcfe fgcdbea egadfc bdca da gad gabed bdeacg | bdegac gcdeb gda dbac",
  "ce dfbac cfebda eabcdgf feagd eca dfbcga bfec defca dgbaec | bdcafg gbecda fdcea bafdcg",
  "adbcfg cegdfa dbeafg caedgfb gfeab caegb fgdea bdfe bf gfb | cbagdf fb becga aebcg",
  "bfgcea gfaecd fbeadg abe cgebd fcega ba bfca agecb ebfcadg | cbaf fdcage gcfae beafdg",
  "ge decgfa fgeb aegbdf gdcfba daebc fbdga edbga adegbcf egd | afebdg abgdf adgcef ceafdbg",
  "ec ceg bcde cbgfad ecafdgb dgcfeb fegcad gebfa cfbge dcgbf | eadgcfb bgdacf cgdbaf cebd",
  "acfbd gbcef dcebaf agbcfd dcbgefa efa ae agfdeb facbe cdae | cead acbfe befac geabfdc",
  "gbafdce cbe fedbgc edgb fegcd ebdfc eagfcb fcadb cedafg eb | cgfebd fbdcge dcegf fdcbe",
  "gefdbac bg ecdga bafce fbcg abcge gfecab egafdb abedfc geb | geb bedgfa cbeag cgfb",
  "agcfdeb febc acf gcaeb fc acfbg gfbace cadegf ecgdab fbagd | cf cdabefg gafcb efdagcb",
  "gfedac efgda bdfac eba degbaf bedagfc be bgef adefb gdebca | efdcbag bdefa edcgab eb",
  "bcdef gebfa gcbfda fcgeb cdbafe ebgcadf bcg cg gdec fbgced | dbacfe ecbfg gecfb gbc",
  "gbceaf bfeagd eb efdb gabed bgcafd cdega bgacfde gbe gbdaf | baedgf eb eagbdf egbfca",
  "bcdgf ecdf fbc bdcgae fc gfadb edfcgb adbfgce gedcb abegcf | bgeadc cfde efdc gaebcd",
  "edafbc bfdae ebac fcagdb dafbcge fbc fcbed bc dcgef fgbade | cb gbfadc cb edgfc",
  "ecgbfda gedc eacfdb aedgb aec bgacf gcdeba bcgae ce aebgfd | facbg eac gecd ce",
  "efacgb ad fadbcg fagec gcbde decga adg cefagd afde cbdegfa | eafdgc fbaecdg gad gfcae",
  "cafbgd bcdaef acegbdf fdc gbcdf bgcade bfegd afcg cf agdcb | fc cgdbf fgac gcaf",
  "efgbd eagdf bdfa agdfce fb cebgd efgbca bfedag feb bgdafce | bgcde afdb fbe acbgdfe",
  "bdaegf dafge dabcefg ca edfbc cdaef gfbaec agdefc adcg afc | afcdge caf eafcgdb bcdgefa",
  "ebcfa cbdeafg fagecd adb ecadb abdfeg bd edcga begdca bcdg | bdgc bad dfecga afcbe",
  "faegd efdcbg gcbde gbafce adgfbce bfe gcbade fedbg bf fcdb | fbdgeca gabdcef dbfc bf",
  "bgface badeg gface cdgf gefcdab fabdce dc agedfc ecd daecg | gdeac edc fdceba acgde",
  "dba gadbe fcbgad bedcg ba daegf fdebga ebaf gdebcfa feagdc | afbged egfdca bad efdgac",
  "bceadf fceag bdgfce efgdc de ced abdfcge afcdbg fdcgb bged | ed becdaf ebfacd cfbeda",
  "gfbdce fdea df fgcab bfd dceab ebdcfa cabged acdgefb afdbc | fgcab befacd dbf fdea",
  "fbaeg ed bcedaf afegd gcafd edagfb ebcgfa faecbgd aed gedb | ebdgaf gfbdaec dae feagd",
  "abecfd gcb ebdg bgeac ebcdagf fdagbc gb cgdabe bdeac gaecf | edbafc afgcdb egdb cbg",
  "eadbgc bafed fbec dafec dbe ecfbad dfbga fdcbgae fdgaec be | afdbg deb cbef gaefbdc",
  "efgabc debfgc bed gadbcfe bcafe bgdca de feda ebdac edbcfa | acfdgeb bcgda adceb ed",
  "gaf bfgeca adebgf fgdb acfed fegda fg egdba cegfdba baecdg | fg bgdae fgbd gbfd",
  "ebdgc gbdfe fcgb gcfdbea badef cdageb bcgdfe fecdga fg fdg | cebfdga gf fg fgd",
  "af aegcdbf gcabf fadgbe aecf acgfbe baf cgdba befdcg gcfbe | ecbgfa acfe acfe dcbagef",
  "gbfac efabdc edbacg gd edfcabg dbg edabgf fged fgadb afdbe | cegadbf fabced gd dbg",
  "gceb eb gbaed cdgea cbdeaf gbadce abe gdcafe bdfga edabfgc | gbec ebgc eadbg gaecd",
  "ab fdba cdaef dfbaec ecfgda ecfgb dgabec bca daefgbc eafbc | fcabe fdgaec aecfd aebcf",
  "gacdebf dfecbg dafgbc afged bcge dfabec gcdfe gc dgc cbdfe | badfec dcg cdg eadfgbc",
  "ecgfdb gfdbae ebd eagfb cgfeba gcbeadf de dage fdaeb dafbc | agde dage bcdfa gecfbd",
  "befdga efdgc fb efb becfg bacgdfe bacf ecadbg egfbca caebg | gbfec fgcde abgce bef",
  "ecbgda fgeabc cafedgb ac efabc ace bagfe bfdec bdaegf facg | aebfg faegb aegbdc daegbc",
  "cafeg cga ebgaf acdf afcedbg beacgd efcadg dfgecb edgfc ac | dcgbfae fdbegc adfgce cgdfea",
  "dfbgace agfcde bdec deg bdeag gceabd ed agceb dfgab cafegb | gbdaf acegb agfdce gdbae",
  "bcdegf gcfde dfceb fdgace bd dacgbe efbcgad bgfd bcd ceafb | dgcef aecgfd bd dgecbf",
  "cfdgab bedafc de edc gdef cdagefb fgebdc gfdbc ecbga dcegb | egcdb abfced defg egcfbda",
  "dfgce afceb faegbd becfg bceadfg bedafc fbecga gb bgf cgab | bg gbac bg egcfb",
  "cfbda fagb cgdea agbfcd dfg dbefcg gf bgfceda cgadf cbafde | gfcdeb afbg fagcd fg",
  "bcdge gdebfa decab cba acefdb fgabdc dcebgaf ac edabf face | faec afec dabgcf cdfbga",
  "fagbde fbaecgd cdbe ebcfa deabf fcb fcgea bdafcg adcfeb bc | bc bc cdfbga dbefag",
  "ca dbgfc gbafc eadgfb fegacdb gabfe acefbg acf cdgefa ebac | baefg caeb ebgfa bgfcae",
  "gdbea ecadfg dba caged adbgce ebgfadc dafcgb egbfa db cebd | fgbea abgecdf bad dgbace",
  "bcdfg cfbeg ge gbde eacdfg fcdbge efg faceb fbgacd efcagdb | dgeb ge fagcebd fbegc",
  "begdfa egadf bgdace gefbac feacd gf dbfg bedag gfa ecdabfg | gfa fcaebg gdeba bgfd",
  "bdecf ab bdfac dba aedbcfg edfgbc dagfbe eacbfd aceb adcfg | agbfed fcbdeg bfdgae bfedcg",
  "dgaefc ebgaf afbdc bdeg eda ebfgad bdefa agbfec bagcdef de | afbeg eda dea acfedg",
  "gd gcfbe gecbaf dgf dgbe ceadf dgabcf cdfge bgcedf bfcaedg | gfdabce gdfce gfd egbd",
  "agbecd dagce dgcf gfa fdegca faceb gf gafbde gafec fbaecgd | fg agfedc gf dfgc",
  "facebd bcfae dcegabf eb fdace egdcfa cbgaf bea gbeacd edbf | eba dfbe fcdbgea gbcade",
  "cefdg edcfb decagb deabfcg egfcbd gd cgfea ged dbgf ebcfad | agfec bgecdf abfgced dbcefa",
  "cae ec fcdega edagc adcfegb adgcb geacbf faedg ecfd bdfage | dbgac aefbcg fbgcae fgedac",
  "adeg cafgdb gdceb gcadb caegbd cbfdea gbfec cfdgbea ed deb | adeg de dbceg cdgbfae",
  "ef cgead adfce gdefcb abgcde gafe bdceafg efcgad edf cbadf | fde edf fecad fe",
  "bgc dcbga abecfdg abcgdf bc bfdag dfbeag dfbc fcbeag dgace | cafbdeg agdfb cdbf cgb",
  "eafcdb egfcabd fdegac gdcfa fab ba gfebc cdfbga dgba gbacf | ab fcaedb baf aefcgdb",
  "egdcabf bcedgf deab bfedga cegaf cagdfb daf dagef fegbd ad | gdbfe deab adeb da",
  "edgc gebaf gcb gbcae eafbdc gc befdcga aebdc dbcega agbdcf | gc degc fgdcab gbaef",
  "gadfc bfeagc faecgdb gfaeb fagbc fgdabe egbcfd ecab cbf bc | bfgca cfb fcb cdgaf",
  "afebg fce dgce dgcbf gecfdb ecfgb cgafdb debfac ce efgacbd | fbdcg gdfabc gebcf dbcgf",
  "bcdef bdace ae afedgb dae dfgbeca aecg gcbfda adcgb gcbade | aed bdgeac dgbaef cega",
  "gcbedfa agfed fb cdbeg bfceda bedgf agfced efgabd bgaf feb | cdefab bf cebdg efb",
  "dcgf cgb bdcea dfbega ecgafb dfeagcb bcgad cg cfbdag gdafb | gbc daceb dgbfa fbgad",
  "fgadb adbgfc aed cdegb efbgda ea agbdfce ebfa bgaed cfaegd | ead dea acgebfd fegadcb",
  "ebdagfc gebafd faecgd becafd cdaef ega ceagf ge gcbfa dcge | acgdef ega age facedg",
  "eafcgd dcbfa afe fecadb ef cdbagf afceb dfgceab dfbe ebacg | fe efdb daebfc gacdbef",
  "fd bcdefag dgfbae cgafd gbfac edcbga gedac fdg cefd egfcda | fedgba df fd eacgd",
  "fe cef efcgab egfa gcbead fgbdce dgcfabe dbafc aebgc aecbf | cfdabge gabcef bdfca gedbcf",
  "baecf efb fedagb ebfagc dacef abgecd bf fdbcgae bcgf gbcea | fgdacbe cefba fecad ecbagd",
  "dfab afecdb baegdc ebfac fa eaf bedca decgfa gdafecb ebfgc | cgfaed efabc fbdaegc fa",
  "dcg gc edbcag cfedab dcbfeg dbaegfc badgf abced eagc adgcb | ecdgbf gc dcaeb agce",
  "gfa dabcg dcefga gfcba fbgd febac gf egabdc acgdbf dcbagef | bgdfac cgdafe gbfca gfa",
  "fgdabe agedf ebfg fbaedc aecbdg bdecfga eg edfba dge adfgc | gedfab bdeaf fbge ge",
  "afgdbc bdf fb cdbeg fegadcb defgab cagdef cafb dcagf bgdcf | bdf fbd adbfegc cgadbfe",
  "dcbgafe cbegd bgadce fbc gcfeab fc dbecgf bagdf dgcfb fdce | afbdg cfb cgfdbea cf",
  "gabcd edb efgbda ebgcd ceba efcdg gbaecd eb fgabcd gfacebd | abecdg ecafgbd bed edb",
  "fcdeagb fdacb cea abef ea dfbcea fdace agcebd dagfbc gdcfe | aebf bcfdae dcfea dcabf",
  "fba eacf cbfad fa dbfce gfcdbe abgcd abfedg afecdb fadcbeg | aecf dcgabef ecgdbaf abedgf",
  "dgbcfae befgdc agcef ebfd gebcf eb ceb dbcega gbfdc bagfdc | gcdafb ecgfb acgef cbdegf",
  "adf cgdab edgabc dbfac cgfd dfgbac cebaf gbcdafe bdgafe fd | bcagd aefbgdc gabdc cbfad",
  "decfg acbdfe bgafcde fdaeg degabf bcfeg cd edc efagcd agdc | acgd feadcg cd befacgd",
  "bcfdge beafdcg cf dagfe bdfc fbgeac dbeacg efc fedgc cdebg | gcfdaeb gbced cef fc",
  "ecdbgf dbcage bdcfaeg gcfbea dcgfe afgde fcbd dc gbcef cdg | fcdge dc dcgaeb gfcbe",
  "cgdae aebfgc cebda ecbdag dcaefb gcedf agbd ga dbcfgea cga | eabdcfg acg cfdeab cfdeg",
  "be bcdfag dfbgce edbagcf deafbc adcge acedb cbe adfcb aefb | cgabdf fbdceg be baegcdf",
  "ecf dgafcb gfeda cegfdb gdcfb febcda ec gecb cdegfab gdcef | cfbdg ce ec efc",
  "adgce aefdbc baged bg bdafgc bgef ebagdf agb adefbgc fadbe | befg badeg fbeg faebd",
  "fgdabe bdgfac cafbed bea eb adgec eabcd egacbfd cefb bfcad | bea be becf degbaf",
  "fagdeb cdebgf dbecg cgb egafdbc efgdb eagcd bc bcfage fbdc | cfeabgd efabdgc bfgde abdefg",
  "cdgeab afdgbe bcafe afebd ad bgedf dgfa ade acdbfge gfebdc | bcgeafd adfg eadgbf ade",
  "fbdec dcaf edf efcdbag ebadc df edbfac bfceg aebcgd bagdef | fd ecfgb defabc dfac",
  "aegcbf fcab abfdge gfcde abecg eaf gfcea fgdbeca dbcgae fa | afe af egbafd fa",
  "acf gfcba fgbea efdgca egdfbc dbcfg dacgbef acbd ca dgbfca | bfgedc gbafc cbfaedg ac",
  "cgbdaf defgab acbge gecda be bgface dcegabf bfce fbagc egb | cbagfd edacg abcdgf aedbcfg",
  "ecgfb cfagbd bf abfe gbeac cdegf agecfb bcf adbefcg ecadbg | ebfa cgdbae acegb edcbga",
  "acbgd debagf decb gacfb dacfge ebdafgc dceag abd db dbecga | aegcdf decb debfga bcde",
  "gcafbe gcfdba gcef fag bgaedfc befga bgcaed fg gbcae fdbea | bdecag gdcfba ecfbdga ceabfg",
  "deag gafdbc bgcda dbafce acdgbe bed bedgc egcfbad de egcbf | bacgd bed de ecgdfba",
  "gabdf cd agcef adc cfdabe fgabde ecabfgd cbgd dgcafb gadcf | bdgc cfegbda egcfa ebdgaf",
  "eg bcfaedg eafbd eag egdc gdafe efacdg aebfgc gcdaf dcafbg | fagbcd ecgd fabed cgfeab",
  "egdfa acdebf acedgb dfeab cfaebg bf bfe dbfegac cbfd edabc | dbefa acebd ceafbg fb",
  "badgc ageb aefcbd gdbfc gcaefd cga dcbea fgaedbc ga agdebc | edbgafc bedfcag gadefc bdgfc",
  "ea dfaeb eafbcd dae gadebcf badfc ecaf gcdfba febgd abgdec | aecf befgd debfg dae",
  "bgcdefa fbcae edfcba de bedca dcgba gbdefc edb aedf bfegac | fecadb agbcd fdea aefgcb",
  "bgcfde feg eg fcged efcgba dfgbc caefd gdeb dcfabg agebfcd | bcgeaf gdeb degb ge",
  "begfa bdgf dfabe dgbeac bad bcafge gfdceba db dfgeba fedac | aefdc dacegb bacdeg dfbegac",
  "dgbef egc fdgecb ec cegfb defc abgdfe gcabf eagfcdb gcbade | gdecba cfde ecg gefcdb",
  "becfadg cadbeg gebdc efcdbg dfbce fec fc cbgf cedagf bfade | edfbc bgfedc fc gfcebd",
  "afcgd gdabfce dacbe dceaf gdef fce ef acebgf fgdacb cegdaf | cagdf cef fgdcba afcdg",
  "gbecfad dcbfae cedbg edf gfdaeb dgbef dbfagc ef efag fbdga | bfdag fde faeg bgdfa",
  "df bcfeag bfegc acebd acfgdb afbgdec dbf edgf cefbd defgbc | bdf cbfeg agcbef bfdec",
  "ceagf begd fbeacdg ecbfd dg dagcbf gecdf cbfeda dfg bfcedg | cdgfba dgcef dg gafcdeb",
  "db baecg fbde dafbcge gbdcaf cdabe ecdagf bad eafcbd cfade | adefcg cfaed db bad",
  "ga agdbcfe bgca cbfda dabfgc efagbd dga adebfc cedgf gcfad | ag agd ga afbcd",
  "cb acbd fcadge fcgbeda gcb efdbcg bfage dacgf bfcdga fcbga | eadgcf dfcga cb bc",
  "afbedc gbaecf gefdc dabg gdbeac ag bdeac age ecagd fagdebc | bfcdaeg agcebf fdecg daecg",
  "afdgbc dacfe efgbad cebdf ebf debgacf fgcbd bgedcf eb gbce | cfbde acedbfg feb eb",
  "fc dcegfb dbaegf cbgae ebgcdaf fbace cafd cef dceafb ebafd | ecgab cbdagfe gbeac afdc",
  "dfag eadbc cfd fecbgd cbfag gafcbe df fcadb bacfdg bgfcdea | fd dcf cfd fd",
  "cbfdgae acf dfcgab afdeg ca bfdce bcegdf cbea dbcaef defac | ac gbacdf ceab ebcgfad",
  "fgabde fbdcag dgbfec afdc fag cabge fa gfdcb fcgab bgeadfc | gfbdc cbgfa acebg bfagc",
  "fdceba febcdag dbga bcfadg fcabge bd bfcga dcb efdgc gbdfc | abfgc bdc fdegbac gfdbc",
  "gbfca aeg bfegca bcefgda ecgba bfea cbdeg gcadef ea cdgafb | fegadc agbcf aecgb ega",
  "ecga dagebf ce bgfeacd ebdga daecgb ceb gfdcb afdecb cdgbe | ec ec gafebdc dgbfea",
  "gad bgfde fagcde dbgaf cbgdfa bacd bfgedca da aefcgb fbcga | gad bfgca cgaedfb abdc",
  "gbcae adef dbcegf eagcfd gefca gaf cbfadg gcdfe beacdfg fa | eagcdbf gaecf aebcg gafce",
  "decbfa eadbcfg fbdcag gda gdfab gabfe dcbaf dgbc gd dfecga | ecbgfad fbedac bceafd abdfg",
  "abegdc ce fcgabd cgbae bdacg gdce cfabde cea fbage gbcaedf | efcabd cdeg fcdeab gedc",
  "befgacd edcb ebagdf dc defba gfeadc fdc abcfd abcgf cebfda | dgfaec dc dc fcgab",
  "cgfbade cfgaed beafdc egdba fbeda afd cabfe fd abfecg fdcb | aegfcb fd eafgcb ebadg",
  "abcdefg egdfb dgface dfb dcefg cgdabf fgecbd bf ecfb adebg | bf cbef bf fdcbag",
  "gceabd eagcbf fcgea dae feagcd cbfde dgfa da eacdbfg dcaef | fcdbe fcegad fgecab ecfgad",
  "dagce fgae dacgb dgecbf dabfce ceagdf dfecg eda ea bgfdaec | cdgefb acedg ae ea",
  "eafdcbg fb feagc edbag cegfab dcfegb afbc ebf aebfg efcgad | dbgea edagb baegf gfebdc",
  "cfb gcbde cfbagd acdbfge bfacde bdfgea fdaeb eafc cf cbfed | bfc gdefba abdef fcb",
  "abgfc bcadf gdebfc gcaeb gfae bfg dagcbe gf gecdafb fceabg | fgacbed gcabe eagf bcdgef",
  "befa dbefagc dbgcf egbacd acfbd bdcefa gefcda af fca dacbe | gfdcb bcdae af ecdafg",
  "cafbge ga beacf cdfaeg cfbdg fgcab ebga fbedcga ebfcda gfa | cebdafg fecgdab ag gafcb",
  "edfacbg abcfg abedgc edcbfg dbf gedbc eabfdg defc df fgcdb | bfgca acdegb dbgaec fedc",
  "ce bgade gcafb gafcbe ebcag cafgbde bdaefc dbfcag fgec bec | ce cegf gafebc bcaefg",
  "dgacef gcf acedf cbfeda agdfceb egfbcd cg gadc aecgf bfaeg | fcg dgfebac abgfe gc",
  "bcafdg fdegb fbaec agf eafgb gbdcaef badgef edag bdecfg ag | gbfcad ga acfbgd agf",
  "cfd fc efcdab facdgbe fcedag cgedb ebdaf fcedb gaedbf acbf | fdebag fegdac fdgeba dfc",
  "cfed cd dca begafd edgaf bcage dacgfb ecagd egacdf gbdfcea | cadgbf bgadfe cda cgeafd",
  "aegd cbgdae cde cgdbfe bdcea de gebfacd acbgd fdgacb cfaeb | dgcab edbcag debgcf daecbg",
  "df gfdea gaefc dfaebg cbgdafe daf bcdgaf aegbd adbgec befd | fad ecgdfab bgdea abgedf",
  "bdfae bfcea ebc edfbca cefdgab ce cgfab fdcebg baefdg cdae | gabcedf ec fdageb agfbc",
  "eg acdeb age dcgbfa debag dcafegb badfg efbacg egfd gdaebf | begad efgd dfgeacb gfebca",
  "egfdac gceb bcf cb gacefb gbcfa gacfe ecbafd efgbacd agbfd | bagfd ecgb gecaf cafbedg",
  "bgead bdfceg cdgeb ab gfeda cbedfga dcba gbceda gbafce abg | begcad cbad eagdf agdbe",
  "cfb cb bgec bdagfc bcdfe dafcegb ebdfcg cdaef bgdfea dgebf | dbfeg dcgfab fecbdag bfdeg",
  "ce agdcbe dafbeg cebfg cbaefg ceg fabeg fcae dfgcb cgbefad | agefbc ecfgb gbeaf gfcbe",
  "acgfe ecfdb eba dbeagcf gfbeac ecfdga bacg bafec ba fgedba | gdabfe ab gebfda afbgce",
  "dcbg fgdeb bfecd egadf baefcdg cfdabe bg fgbdec bgf febacg | bgcd fcbeda befgdca fcbed",
  "badecg bacd afegbd egdcb adfcbeg dag ecfag ad bcedfg daegc | dbac gbdec ceafg edgcb",
  "egfcba cedbf fcgdea cdefa debcg feb dafebc fb bdfa ebcgdaf | fbda cfedb bfad bf",
  "gcbadf abcfd bdcgae gbaf gacbedf ba acb dgfcb fbgecd deacf | cgbdf ba cdegab bagf",
  "cbfda gbceaf edgb bfgeadc dcgeaf de bcegda ecd cgeba cdaeb | efabgc fbdac cdefabg ecd",
  "fadcg cdgafb dfce de deg gbafe dgfea bcdeafg cedfga bcedag | acfedg fabeg gceafd ecfd",
  "cfebga gfdaceb fbdcga aefgb ebg afbcg eb bace bedgfc dgfea | be geadf be fdgcabe",
  "fecad egcba bfcaeg gefac abcdfge cbgdef gf gef gbaf agecdb | efg acfge gbaf fg",
  "eafb dfcgb cfe ef cgabed adfgec bcafedg cdbea fcedb cbfead | dfaecg gaebcd feacdb cdgbea",
  "aefdcb afdecg dafg eaf af edbcagf fcgbe gcdae ecfga degbca | gacdbe fagd agcedb gadcef",
  "ebgfc fbd gfbcd agbdc fd cfed dafbge bgdfec gfebca fbadgec | df fd cgfbd aebfcg",
  "bfcage gdcafeb efcba cgab eba ab cbfdeg cgefb edgabf dacef | ba bafdegc fbcae dcgfbe",
  "dbfgec fb cegabf cabgd bdfe bfc eacfgd ecbdagf dcegf cbdfg | bfc cbf agebcf bf",
  "bcgfda bg bdgf aecgfd ecadb fgdca cfagbe cgb adgcb cebdfga | bcg gcfbae egfcab cdafgb",
  "eb fgbdc fbcaedg abcdfg ebg cbgdef dfgeb edafg edbc agbcfe | bcde cebd decfbg bcde",
  "ebc abcgfde be aedbcf egadfc gbdfc fcdae baef bdceag efcbd | aegdfc efab fedbc cbedafg",
];

// 0 = 6
// 1 = 2
// 2 = 5
// 3 = 5
// 4 = 4
// 5 = 5
// 6 = 6
// 7 = 3
// 8 = 7
// 9 = 6

// cf = 1
// acf = 7

// 1 = 2
// 4 = 4
// 7 = 3
// 8 = 7

// const samples = [
//   "acedgfb cdfbe gcdfa fbcad dab cefabd cdfgeb eafb cagedb ab | cdfeb fcadb cdfeb cdbaf",
// ];

// const samples = [
//   "be cfbegad cbdgef fgaecd cgeb fdcge agebfd fecdb fabcd edb | fdgacbe cefdb cefbgd gcbe",
//   "edbfga begcd cbg gc gcadebf fbgde acbgfd abcde gfcbed gfec | fcgedb cgb dgebacf gc",
//   "fgaebd cg bdaec gdafb agbcfd gdcbef bgcad gfac gcb cdgabef | cg cg fdcagb cbg",
//   "fbegcd cbd adcefb dageb afcb bc aefdc ecdab fgdeca fcdbega | efabcd cedba gadfec cb",
//   "aecbfdg fbg gf bafeg dbefa fcge gcbea fcaegb dgceab fcbdga | gecf egdcabf bgf bfgea",
//   "fgeab ca afcebg bdacfeg cfaedg gcfdb baec bfadeg bafgc acf | gebdcfa ecba ca fadegcb",
//   "dbcfg fgd bdegcaf fgec aegbdf ecdfab fbedc dacgb gdcebf gf | cefg dcbef fcge gbcadfe",
//   "bdfegc cbegaf gecbf dfcage bdacg ed bedf ced adcbefg gebcd | ed bcgafe cdgba cbgef",
//   "egadfb cdbfeg cegd fecab cgb gbdefca cg fgcdab egfdb bfceg | gbdfcae bgc cg cgb",
//   "gcafb gcf dcaebfg ecagb gf abcdeg gaef cafbge fdbac fegbdc | fgae cfgab fg bagce",
// ];

// const digitMap = {
//   abcdefg: 8,
//   bcdef: 5,
//   acdfg: 2,
//   abcdf: 3,
//   abd: 7,
//   abcdef: 9,
//   bcdefg: 6,
//   abef: 4,
//   abcdeg: 0,
//   ab: 1,
// };

// const altDigitMap = {
//   dgebacf: 8,
//   dcbef: 5,
//   cdgba: 2,
//   cefdb: 3,
//   cgb: 7,
//   fdcagb: 9,
//   bcgafe: 6,
//   gcbe: 4,
//   abcdeg: 0,
//   gc: 1,
// };

// const digitMap = {
//   cagedb: 0,
//   cg: 1,
//   ab: 1,
//   cdgba: 2,
//   gcdfa: 2,
//   cedba: 3,
//   fbcad: 3,
//   cefdb: 3,
//   bfgea: 3,
//   cfgab: 3,
//   ecba: 4,
//   eafb: 4,
//   cdfbe: 5,
//   dcbef: 5,
//   cbgef: 5,
//   bagce: 5,
//   cdfgeb: 6,
//   gadfec: 6,
//   bcgafe: 6,
//   dab: 7,
//   cgb: 7,
//   cefabd: 9,
//   fdgacbe: 8,
//   acedgfb: 8,
//   efabcd: 9,
//   cefbgd: 9,
//   fcgedb: 9,
//   fdcagb: 9,
// };

// const altDigitMap = {};

// function sortAlphabets(text) {
//   return text.split("").sort().join("");
// }

// function sortDigitalMap() {
//   Object.keys(digitMap).forEach((key) => {
//     const value = digitMap[key];
//     altDigitMap[sortAlphabets(key)] = value;
//   });
// }

// function findNumberOfMatches() {
//   const outputs = samples.map((sample) => {
//     return parseInt(
//       sample
//         .split(" | ")[1]
//         .split(" ")
//         .map((segment) => {
//           console.log(`segment: `, segment);
//           if (segment.length === 2) {
//             return 1;
//           }
//           if (segment.length === 4) {
//             return 4;
//           }
//           if (segment.length === 3) {
//             return 7;
//           }
//           if (segment.length === 7) {
//             return 8;
//           }

//           const value = digitMap[segment];

//           return value;
//         })
//         .join(""),
//       10
//     );
//   }).reduce((a, b) => a + b, 0);

//   console.log(`outputs: `, outputs);
// }
// findNumberOfMatches();

// function findNumberOfMatches() {
//   sortDigitalMap();
//   const outputs = samples.map((sample) => {
//     return parseInt(
//       sample
//         .split(" | ")[1]
//         .split(" ")
//         .map((segment) => {
//           let value;
//           console.log(`segment: `, segment);
//           if (segment.length === 2) {
//             value = 1;
//           }
//           if (segment.length === 4) {
//             value = 4;
//           }
//           if (segment.length === 3) {
//             value = 7;
//           }
//           if (segment.length === 7) {
//             value = 8;
//           }

//           if (!value && digitMap[segment]) {
//             value = digitMap[segment];
//           }

//           if (!value) {
//             value = altDigitMap[sortAlphabets(segment)];
//           }
//           console.log(`value: `, value);

//           return value;
//         })
//         .join(""),
//       10
//     );
//   });

//   // console.log(`outputs: `, outputs);
// }
// findNumberOfMatches();

import { ObjectId } from "mongodb";
import db from "../db.js";

// const products = [
//     {
//         title: 'vestido infantil - tam 12',
//         value: '50',
//         description: 'lindo vestidinho vermelho de festa para meninas',
//         type: 'clothing',
//         image: 'https://i.ibb.co/pr5fgZ0/vestidoinfantil.jpg',
//         subcategory: 'infantil'
//     },
//     {
//         title: 'Conjunto feminino short+cropped- tam 38',
//         value: '80',
//         description: 'conjunto pouco usado, muito bom passeios',
//         type: 'clothing',
//         image: 'https://i.ibb.co/VMCWdcd/Conjunto-Feminino.jpg',
//         subcategory: 'feminino'
//     },
//     {
//         title: 'vestido estampado - tam 40',
//         value: '150',
//         description: 'vestido em ótimas condições, pode ser usado como saída de praia ou como vestido social, basta usar a imaginação',
//         type: 'clothing',
//         image: 'https://i.ibb.co/KhnzVJ3/vestido-Feminino.jpg',
//         subcategory: 'feminino'
//     },
//     {
//         title: 'Bermuda branca - tam 40',
//         value: '30',
//         description: 'Bermuda confeccionada em tactel, super fresquinha, ótima para o dia-a-dia',
//         type: 'clothing',
//         image: 'https://i.ibb.co/dL2fL7S/Bermuda-Masculina.jpg',
//         subcategory: 'masculino'
//     },
//     {
//         title: 'Camiseta Gucci Masculina - tam 42',
//         value: '70',
//         description: 'Camiseta original, usada algumas vezes, em perfeitas condições',
//         type: 'clothing',
//         image: 'https://i.ibb.co/SmzcYnk/camiseta-Masculina.jpg',
//         subcategory: 'masculino'
//     },
//     {
//         title: 'Tv samsung - 50"',
//         value: '2000',
//         description: 'Tv utilizada por mais ou menos 6 meses. É uma ótima televisão com imagem e funções excelentes. Motivo da venda: comprei outra maior',
//         type: 'eletronics',
//         image: 'https://i.ibb.co/B2cgK3H/sansung.png',
//         subcategory: 'TV'
//     },
//     {
//         title: 'Smartphone Samsung Galaxy A22, 128GB, 4GB RAM, Octa-Core, Camêra Quadrupla + Selfie 13MP, Tela Infinita 6.4, 5000mAh, Verde - SM-A225MLGRZTO"',
//         value: '1100',
//         description: 'Smartphone com algumas marcas de uso mas em ótimo estado de conservação',
//         type: 'eletronics',
//         image: 'https://i.ibb.co/N2LympG/sansunggalax-A22.jpg',
//         subcategory: 'smartphone'
//     },
//     {
//         title: 'smartphone-lg-k51s-titanium-64gb-ram-3gb-octa-core-4g-cam-quadrupla-selfie-13mp-tela-65-android-9',
//         value: '600',
//         description: 'Smartphone com poucas avarias, um pequeno trincado na tela mas nada que influencie no bom funcionamento do aparelho',
//         type: 'eletronics',
//         image: 'https://i.ibb.co/z2jLS5B/smartphone-lg-k51s-titanium-64gb-ram-3gb-octa-core-4g-cam-quadrupla-selfie-13mp-tela-65-android-9.jpg',
//         subcategory: 'smartphone'
//     },
//     {
//         title: 'Console Nintendo Switch 32GB + Controle Joy-Con cinza',
//         value: '2100',
//         description: 'Em ótimo estado de conservação. É muito bom para passar o tempo',
//         type: 'eletronics',
//         image: 'https://i.ibb.co/sWTbgV6/nintendo-Switch.jpg',
//         subcategory: 'console'
//     },
//     {
//         title: 'Notebook Dell Core i3-1005G1 4GB 256GB SSD Tela 15.6” Windows 10 Inspiron I15-3501-A25P',
//         value: '3000',
//         description: 'Notebook semi-novo, funcionando perfeitamente, uma ótima aquisição',
//         type: 'eletronics',
//         image: 'https://i.ibb.co/3dSQmfP/616-PBNK19a-L-AC-SY450.jpg',
//         subcategory: 'notebook'
//     },
//     {
//         title: 'jogo de panelas',
//         value: '80',
//         description: 'Em ótimo estado de conservação, tem um valor sentimental muito grande',
//         type: 'home',
//         image: 'https://i.ibb.co/sRx7gXq/jogo-de-panelas.jpg',
//         subcategory: 'utensílios'
//     },
//     {
//         title: 'Guarda-roupas de casal',
//         value: '100',
//         description: 'usado por dois anos mas em ótimo estado de conservação',
//         type: 'home',
//         image: 'https://i.ibb.co/p39G47d/guarda-roupas.jpg',
//         subcategory: 'móveis'
//     },
//     {
//         title: 'conjunto de poltronas',
//         value: '350',
//         description: 'conjunto de poltronas',
//         type: 'home',
//         image: 'https://i.ibb.co/sRWxWxt/poltronas.jpg',
//         subcategory: 'móveis'
//     },
//     {
//         title: 'Fogão atlas',
//         value: '200',
//         description: 'fogão utilizado por dois anos, com algumas avarias mas em perfeito estado de funcionamento',
//         type: 'home',
//         image: 'https://i.ibb.co/41PH4Cs/fog-o.jpg',
//         subcategory: 'eletrodoméstico'
//     },
//     {
//         title: 'Jogo de lençois novo-casal',
//         value: '400',
//         description: 'jogo de lençol novo, vem com dois lençois duas fronhas e um vira',
//         type: 'home',
//         image: 'https://i.ibb.co/K08Y6Dw/jogo-de-len-ol.jpg',
//         subcategory: 'cama-mesa-banho'
//     },
//     {
//         title: 'Sapato masculino marrom - tam 40 ',
//         value: '50',
//         description: 'Sapato super confortável, quem adquiri-lo não irá se arrepender',
//         type: 'shoes',
//         image: 'https://i.ibb.co/qCQzrqj/calcados-masculinos-1.jpg',
//         subcategory: 'masculino'
//     },
//     {
//         title: 'Sapato masculino verde - tam 40 ',
//         value: '70',
//         description: 'Sapato confortável, ótimo para grandes caminhadas',
//         type: 'shoes',
//         image: 'https://i.ibb.co/WVZsJtW/b2dadce07a68e9344b8fc23cdffb6430-canvas-sneakers-men-sneakers.jpg',
//         subcategory: 'masculino'
//     },
//     {
//         title: 'Sapato infantil amarelo - tam 16 ',
//         value: '90',
//         description: 'Sapatinho usado poucas vezes ',
//         type: 'shoes',
//         image: 'https://i.ibb.co/0rZ673S/sapato-tip-toye.png',
//         subcategory: 'infantil'
//     },
//     {
//         title: 'Sandalia feminina nude - tam 36 ',
//         value: '60',
//         description: 'confortável e fresquinha, uma ótima aquisição ',
//         type: 'shoes',
//         image: 'https://i.ibb.co/vk8dMLn/sand-lia.jpg',
//         subcategory: 'feminino'
//     },
//     {
//         title: 'Sandalia rasteirinha azul com pedras - tam 38 ',
//         value: '40',
//         description: 'Rasteirinha ótima para dar um brilho no dia-a-dia ',
//         type: 'shoes',
//         image: 'https://i.ibb.co/hVKwkPw/40-calcados-femininos-couro-sintetico-1491159162.jpg',
//         subcategory: 'feminino'
//     },
//     {
//         title: 'Conjunto preto cropped + pantalona - tam 40',
//         value: '260',
//         description: 'calça com cós alto fechamento em zíper nas costas detalhes em drapeado e botões - cropped com amarração que pode ser trançada fechamento em zíper atrás detalhes de aviamento',
//         type: 'clothing',
//         image: 'https://i.ibb.co/z8j217V/cz-M6-Ly9wa-G90b3-Mu-ZW5qb2-Vp-Lm-Nvb-S5ici9wcm9kd-WN0cy8x-OTE2-ODQ1-Mi85-Yz-E4-Zj-Zh-YTZk-NDZk-Nz-E.jpg',
//         subcategory: 'Feminino'
//     },
//     {
//         title: 'camisa vermelha veludo',
//         value: '30',
//         description: 'camisa vermelha confeccionada em veludo, o modelo possui gola italiana, manga longa, botão frontal e modelagem reta. composição: poliéster',
//         type: 'clothing',
//         image: 'https://i.ibb.co/G9K1LYn/cz-M6-Ly9wa-G90b3-Mu-ZW5qb2-Vp-Lm-Nvb-S5ici9wcm9kd-WN0cy81-OTAz-Mj-M2-Lz-Vk-ZTRk-YTI4-ZTE5-Y2-Ey-NGQ.jpg',
//         subcategory: 'Feminino'
//     },
//     {
//         title: 'sapatilha couro bordada',
//         value: '116',
//         description: 'sapatilha de couro bordada super confortável',
//         type: 'shoes',
//         image: 'https://i.ibb.co/ncKm7qZ/cz-M6-Ly9wa-G90b3-Mu-ZW5qb2-Vp-Lm-Nvb-S5ici9wcm9kd-WN0cy8x-ODgy-NDI2-OS9m-Y2-Mz-OWQy-Yz-U5-Y2-Qw-YWU.jpg',
//         subcategory: 'Feminino'
//     },
//     {
//         title: 'tênis under armour n. 37',
//         value: '299',
//         description: 'tênis da marca under armour, n. 37, pouquíssimo usado, suuuuuper confortável!',
//         type: 'shoes',
//         image: 'https://i.ibb.co/L16wqt6/cz-M6-Ly9wa-G90b3-Mu-ZW5qb2-Vp-Lm-Nvb-S5ici9wcm9kd-WN0cy8y-Mjc3-MTE2-MC83-ZGEy-NDU4-Nj-Fh-MTBm-NGZh.jpg',
//         subcategory: 'Feminino'
//     },
//     {
//         title: 'sapatilha-tênis n.34 flexível feminina em couro laranja',
//         value: '151',
//         description: 'uma graça essa sapatilha-tênis flexível em couro laranja, da all star. o modelo tem sola branca, elástico em todo o seu contorno e é mega confortável. sem uso, novinha e sem avarias.',
//         type: 'shoes',
//         image: 'https://i.ibb.co/VQPPdRC/cz-M6-Ly9wa-G90b3-Mu-ZW5qb2-Vp-Lm-Nvb-S5ici9wcm9kd-WN0cy8x-Mzcx-Ni9k-NGEx-Nz-M3-YTI3-NTk1-Zj-Qw-Ym-R.jpg',
//         subcategory: 'Feminino'
//     },
//     {
//         title: 'tênis lilás gambo',
//         value: '60',
//         description: 'usado pouquíssimas vezes, não me adaptei!',
//         type: 'shoes',
//         image: 'https://i.ibb.co/T1Dj27Q/cz-M6-Ly9wa-G90b3-Mu-ZW5qb2-Vp-Lm-Nvb-S5ici9wcm9kd-WN0cy84-MDIx-Nz-E0-L2-Vh-Yz-E0-ODdh-Nj-Uw-M2-Iy-N.webp',
//         subcategory: 'Feminino'
//     },
//     {
//         title: 'kindle novo',
//         value: '400',
//         description: 'kindle com apenas 2 meses de uso! com garantia de fábrica ainda! 10 geração ! venda por motivos de ganhei o novo e estou vendendo esse',
//         type: 'eletronics',
//         image: 'https://i.ibb.co/GcVtfyY/cz-M6-Ly9wa-G90b3-Mu-ZW5qb2-Vp-Lm-Nvb-S5ici9wcm9kd-WN0cy85-Nj-Ew-Mjgv-Yj-Yz-Nj-Jk-NWNh-N2-Rh-NTBm-Nj.jpg',
//         subcategory: 'Kindle'
//     },
//     {
//         title: 'iphone 11 / 256gb',
//         value: '3200',
//         description: 'iphone 11 / 256gb / lacrado e original / 1 ano de garantia / com todos acessórios / desbloqueado para todas operadoras.',
//         type: 'eletronics',
//         image: 'https://i.ibb.co/68hgP0f/cz-M6-Ly9wa-G90b3-Mu-ZW5qb2-Vp-Lm-Nvb-S5ici9wcm9kd-WN0cy8y-NTQy-Mz-Yz-Ny8z-ZTJh-N2-Fk-Nj-Ew-ZTAy-Mz.jpg',
//         subcategory: 'Smartphone'
//     },
//     {
//         title: 'mesa de cabeceira',
//         value: '100',
//         description: 'mesa de cabeceira branca com detalhes em estampa de madeira clara.',
//         type: 'home',
//         image: 'https://i.ibb.co/TvTzrQS/cz-M6-Ly9wa-G90b3-Mu-ZW5qb2-Vp-Lm-Nvb-S5ici9wcm9kd-WN0cy8x-Nzg0-Mz-Mx-OS8w-Nm-Fi-ZWJk-ZDA5-ZWZj-Y2-I.jpg',
//         subcategory: 'Móveis'
//     },
//     {
//         title: 'calça flare jeans clara rjussa',
//         value: '56',
//         description: 'calça flare jeans clara com detalhes destroyed, possui elastano, veste 40/42, sem avarias',
//         type: 'clothing',
//         image: 'https://i.ibb.co/k4Fq4v4/cz-M6-Ly9wa-G90b3-Mu-ZW5qb2-Vp-Lm-Nvb-S5ici9wcm9kd-WN0cy8y-MDMy-MDIz-MS8w-NDBl-Mzlj-Mz-Uy-Nm-U1-NTI3.webp',
//         subcategory: 'Feminino'
//     },
//     {
//         title: 'sofá nogo 2 lugares mesclado bege tok&stok',
//         value: '850',
//         description: 'vendo sofá da tok&stok nogo 2 lugares mesclado bege novo, em ótimo estado',
//         type: 'home',
//         image: 'https://i.ibb.co/60VDnqZ/cz-M6-Ly9wa-G90b3-Mu-ZW5qb2-Vp-Lm-Nvb-S5ici9wcm9kd-WN0cy81-OTkz-Nj-M0-Lzdm-MDkx-YTM1-Y2-Ni-ODdl-ZDJl.jpg',
//         subcategory: 'Móveis'
//     },
//     {
//         title: 'relíquia espelho em metal dourado',
//         value: '420',
//         description: 'maravilhoso espelho em metal dourado todo trabalhado, cm regulagem para colocar na posição que queira.',
//         type: 'home',
//         image: 'https://i.ibb.co/wBZW0LM/cz-M6-Ly9wa-G90b3-Mu-ZW5qb2-Vp-Lm-Nvb-S5ici9wcm9kd-WN0cy8x-Mz-Q5-NTMw-Mi84-NTdj-MTZj-MDlh-Ym-Vk-Yj-N.webp',
//         subcategory: 'Decoração'
//     },
//     {
//         title: 'vitrola pulse sinatra bluetooth',
//         value: '650',
//         description: 'vitrola pulse, bivolt. comprada no final de janeiro, nova. usada poucas vezes.',
//         type: 'eletronics',
//         image: 'https://i.ibb.co/1sk166W/cz-M6-Ly9wa-G90b3-Mu-ZW5qb2-Vp-Lm-Nvb-S5ici9wcm9kd-WN0cy80-NDY1-NTMv-Zm-Ex-MGQ1-Mz-Rm-NWQ3-NWJk-NTk3.jpg',
//         subcategory: 'Vitrola'
//     },
//     {
//         title: 'notebook dell i3 1tb 4gb ram',
//         value: '2300',
//         description: 'notebook único dono, carregador não é mais o original, bateria em dia notebook não está viciado, funciona normalmente fora da tomada, vai com windows 10.',
//         type: 'eletronics',
//         image: 'https://i.ibb.co/NytRjZN/cz-M6-Ly9wa-G90b3-Mu-ZW5qb2-Vp-Lm-Nvb-S5ici9wcm9kd-WN0cy85-MTg0-Mjgz-Lz-E1-Nz-Zk-Yz-E1-ODQ0-NDAz-ZDM.jpg',
//         subcategory: 'Notebook'
//     },
//     {
//         title: 'jaqueta jeans',
//         value: '150',
//         description: 'jaqueta tam. M em jeans',
//         type: 'clothing',
//         image: 'https://i.ibb.co/XWn4WLr/cz-M6-Ly9wa-G90b3-Mu-ZW5qb2-Vp-Lm-Nvb-S5ici9wcm9kd-WN0cy8x-Nz-E2-Nz-E4-MS85-ZThi-ZDRj-Nm-I3-MTcx-OGY.jpg',
//         subcategory: 'Feminino'
//     },
//     {
//         title: 'sandalia salto amarração',
//         value: '115',
//         description: 'sandália salto amarração amarela. tam. 36, combina com tudo, super confortável, desde ao básico ate o sofisticado.',
//         type: 'shoes',
//         image: 'https://i.ibb.co/W6jn3qx/cz-M6-Ly9wa-G90b3-Mu-ZW5qb2-Vp-Lm-Nvb-S5ici9wcm9kd-WN0cy8y-Mz-Ex-NDk5-MS9h-NTY4-MWJk-YTY3-Ym-E0-Njc1.jpg',
//         subcategory: 'Feminino'
//     },
//     {
//         title: 'bolsa tricozinho',
//         value: '41',
//         description: 'bolsa tricozinho muito linda toda colorida .ela fecha dos lados com fita e dentro com botáo de pressão.',
//         type: 'clothing',
//         image: 'https://i.ibb.co/WpCJY0R/cz-M6-Ly9wa-G90b3-Mu-ZW5qb2-Vp-Lm-Nvb-S5ici9wcm9kd-WN0cy8y-MTAw-NTY2-My9l-Mz-I5-NDZj-MWQ0-Nzg1-MDk2.jpg',
//         subcategory: 'Feminino'
//     },
//     {
//         title: 'poltrona mole sergio rodrigues',
//         value: '7900',
//         description: 'patrona mole sergio rodrigues releitura em couro',
//         type: 'home',
//         image: 'https://i.ibb.co/Hqn711Y/cz-M6-Ly9wa-G90b3-Mu-ZW5qb2-Vp-Lm-Nvb-S5ici9wcm9kd-WN0cy8x-ODA5-OTgz-OS80-ZWNh-Mz-Rm-Nm-Nm-Zjlj-OWRh.jpg',
//         subcategory: 'Móveis'
//     },
//     {
//         title: 'jogo sousplat crochê',
//         value: '116',
//         description: 'jogo de sousplat / centro de mesa ou aparador confeccionados em crochê artesanal com fio meada super premium 100% lã natural',
//         type: 'home',
//         image: 'https://i.ibb.co/3rbCcmQ/cz-M6-Ly9wa-G90b3-Mu-ZW5qb2-Vp-Lm-Nvb-S5ici9wcm9kd-WN0cy82-Mz-Mw-MDkw-Lz-Ay-N2-Mw-Zm-Yx-OWJh-MWU2-ND.jpg',
//         subcategory: 'Decoração'
//     },
//     {
//         title: 'playstation 4 pro 1tb',
//         value: '2800',
//         description: 'playstation 4 pro com 2 controles e mais 5 jogos',
//         type: 'eletronics',
//         image: 'https://i.ibb.co/b229nDB/cz-M6-Ly9wa-G90b3-Mu-ZW5qb2-Vp-Lm-Nvb-S5ici9wcm9kd-WN0cy8y-NDM2-NDE2-MS9m-MTNl-Nz-M3-MGQ1-MWI3-Y2-U5.jpg',
//         subcategory: 'Console'
//     },    

// ]

export async function createdProduct(req, res) {
    
    const product=req.body;
    console.log(product);
    try {
        console.log("entrei aqui");
        // products.map(async product =>
        //     {
        //         await db.collection("products").insertOne({ ...product });
                
        //     }        
        // );

        await db.collection("products").insertOne(product);
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
        
    }

}

export async function getProducts(req,res){
    try {
       const products= await db.collection("products").find({}).toArray();
        res.send(products);

    } catch (error) {
        res.sendStatus(500);
    }
}

export async function getProduct(req, res){
    try {
        const product = await db.collection("products").findOne({_id: new ObjectId(req.params.id)});
        res.send(product);
    } catch (error) {
        res.status(500).send(req.params.id);
    }
}

export async function checkout(req, res){
    try {
        await db.collection("orders").insertOne(req.body);
        res.status(200).send("Seu pedido foi realizado!");
    } catch (error) {
        res.status(500).send("Erro interno");
    }
}
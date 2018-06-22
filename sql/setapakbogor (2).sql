-- phpMyAdmin SQL Dump
-- version 4.8.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 22, 2018 at 05:33 AM
-- Server version: 10.1.31-MariaDB
-- PHP Version: 7.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `setapakbogor`
--

-- --------------------------------------------------------

--
-- Table structure for table `alamatcategory`
--

CREATE TABLE `alamatcategory` (
  `alamatcategory_id` int(25) NOT NULL,
  `provinsi` char(100) NOT NULL,
  `kabupaten` char(100) NOT NULL,
  `kecamatan` char(100) NOT NULL,
  `kode_pos` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `alamatcategory`
--

INSERT INTO `alamatcategory` (`alamatcategory_id`, `provinsi`, `kabupaten`, `kecamatan`, `kode_pos`) VALUES
(1, 'Jawa Barat', 'Kab. Bogor', 'Babakan Madang', ''),
(2, 'Jawa Barat', 'Kab. Bogor', 'Bojonggede', ''),
(3, 'Jawa Barat', 'Kab. Bogor', 'Caringin', ''),
(4, 'Jawa Barat', 'Kab. Bogor', 'Cariu', ''),
(5, 'Jawa Barat', 'Kab. Bogor', 'Ciampea', ''),
(6, 'Jawa Barat', 'Kab. Bogor', 'Ciawi', ''),
(7, 'Jawa Barat', 'Kab. Bogor', 'Cibinong', ''),
(8, 'Jawa Barat', 'Kab. Bogor', 'Cibungbulang', ''),
(9, 'Jawa Barat', 'Kab. Bogor', 'Cigombong', ''),
(10, 'Jawa Barat', 'Kab. Bogor', 'Cigudeg', ''),
(11, 'Jawa Barat', 'Kab. Bogor', 'Cijeruk', ''),
(12, 'Jawa Barat', 'Kab. Bogor', 'Cileungsi', ''),
(13, 'Jawa Barat', 'Kab. Bogor', 'Ciomas', ''),
(14, 'Jawa Barat', 'Kab. Bogor', 'Cisarua', ''),
(15, 'Jawa Barat', 'Kab. Bogor', 'Ciseeng', ''),
(16, 'Jawa Barat', 'Kab. Bogor', 'Citeureup', ''),
(17, 'Jawa Barat', 'Kab. Bogor', 'Dramaga', ''),
(18, 'Jawa Barat', 'Kab. Bogor', 'Gunung Putri', ''),
(19, 'Jawa Barat', 'Kab. Bogor', 'Gunung Sindur', ''),
(20, 'Jawa Barat', 'Kab. Bogor', 'Jasinga', ''),
(21, 'Jawa Barat', 'Kab. Bogor', 'Jonggol', ''),
(22, 'Jawa Barat', 'Kab. Bogor', 'Kemang', ''),
(23, 'Jawa Barat', 'Kab. Bogor', 'Klapanunggal', ''),
(24, 'Jawa Barat', 'Kab. Bogor', 'Leuwiliang', ''),
(25, 'Jawa Barat', 'Kab. Bogor', 'Leuwisadeng', ''),
(26, 'Jawa Barat', 'Kab. Bogor', 'Megamendung', ''),
(27, 'Jawa Barat', 'Kab. Bogor', 'Nanggung', ''),
(28, 'Jawa Barat', 'Kab. Bogor', 'Pamijahan', ''),
(29, 'Jawa Barat', 'Kab. Bogor', 'Parung Panjang', ''),
(30, 'Jawa Barat', 'Kab. Bogor', 'Parung', ''),
(31, 'Jawa Barat', 'Kab. Bogor', 'Ranca Bungur', ''),
(32, 'Jawa Barat', 'Kab. Bogor', 'Rumpin', ''),
(33, 'Jawa Barat', 'Kab. Bogor', 'Sukajaya', ''),
(34, 'Jawa Barat', 'Kab. Bogor', 'Sukamakmur', ''),
(35, 'Jawa Barat', 'Kab. Bogor', 'Sukaraja', ''),
(36, 'Jawa Barat', 'Kab. Bogor', 'Tajur Halang', ''),
(37, 'Jawa Barat', 'Kab. Bogor', 'Tamansari', ''),
(38, 'Jawa Barat', 'Kab. Bogor', 'Tanjungsari', ''),
(39, 'Jawa Barat', 'Kab. Bogor', 'Tenjo', ''),
(40, 'Jawa Barat', 'Kab. Bogor', 'Tenjolaya', '');

-- --------------------------------------------------------

--
-- Table structure for table `barang`
--

CREATE TABLE `barang` (
  `barang_id` int(12) NOT NULL,
  `pemandu_id` int(12) NOT NULL,
  `nama_barang` varchar(30) NOT NULL,
  `harga` int(50) NOT NULL,
  `kuantitas` int(10) NOT NULL,
  `berat_gram` int(12) NOT NULL,
  `deskripsi` text NOT NULL,
  `date_post` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `barang`
--

INSERT INTO `barang` (`barang_id`, `pemandu_id`, `nama_barang`, `harga`, `kuantitas`, `berat_gram`, `deskripsi`, `date_post`) VALUES
(1, 1, 'Barang Amos A', 20000, 20, 200, ' Edit ', '2018-05-11 16:19:36'),
(6, 1, 'Barang Amos B', 25000, 10, 200, ' Percobaan 1 ', '2018-05-11 17:38:54'),
(7, 1, 'Barang Amos C', 30000, 5, 200, ' Percobaan 1 ', '2018-05-11 17:38:55');

-- --------------------------------------------------------

--
-- Table structure for table `blacklist`
--

CREATE TABLE `blacklist` (
  `token` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `fasilitas`
--

CREATE TABLE `fasilitas` (
  `fasilitas_id` int(25) NOT NULL,
  `ac` varchar(10) NOT NULL,
  `parking` varchar(10) NOT NULL,
  `bathroom` varchar(10) NOT NULL,
  `bedroom` varchar(10) NOT NULL,
  `wifi` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `fasilitas`
--

INSERT INTO `fasilitas` (`fasilitas_id`, `ac`, `parking`, `bathroom`, `bedroom`, `wifi`) VALUES
(1, 'yes', 'yes', 'yes', 'yes', 'yes'),
(4, 'yes', 'yes', 'yes', 'yes', 'yes'),
(5, 'yes', 'yes', 'yes', 'yes', 'yes'),
(6, 'yes', 'yes', 'yes', 'yes', 'yes'),
(7, 'yes', 'yes', 'yes', 'yes', 'yes'),
(8, 'yes', 'yes', 'yes', 'yes', 'yes'),
(9, 'yes', 'yes', 'yes', 'yes', 'yes'),
(10, 'yes', 'yes', 'yes', 'yes', 'yes'),
(11, 'yes', 'yes', 'yes', 'yes', 'yes');

-- --------------------------------------------------------

--
-- Table structure for table `homestay`
--

CREATE TABLE `homestay` (
  `homestay_id` int(12) NOT NULL,
  `pemandu_id` int(12) NOT NULL,
  `fasilitas_id` int(25) NOT NULL,
  `alamatcategory_id` int(20) NOT NULL,
  `nama_homestay` varchar(30) NOT NULL,
  `harga_perhari` int(50) NOT NULL,
  `deskripsi` text NOT NULL,
  `alamat` varchar(50) NOT NULL,
  `status_avail` varchar(13) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `homestay`
--

INSERT INTO `homestay` (`homestay_id`, `pemandu_id`, `fasilitas_id`, `alamatcategory_id`, `nama_homestay`, `harga_perhari`, `deskripsi`, `alamat`, `status_avail`) VALUES
(1, 1, 9, 17, 'Keray', 20000, 'Homestay keluar Amos', 'Jl raya dramaga', '1'),
(2, 1, 10, 17, 'Keraz', 30000, 'Homestay keluar Amos', 'Jl raya dramaga', '0'),
(3, 2, 11, 17, 'Homestay ku', 20000, 'Homestay keluar Emiel', 'Jl raya dramaga', '0');

-- --------------------------------------------------------

--
-- Table structure for table `jasa`
--

CREATE TABLE `jasa` (
  `jasa_id` int(12) NOT NULL,
  `pemandu_id` int(12) NOT NULL,
  `alamatcategory_id` int(12) NOT NULL,
  `nama_jasa` varchar(30) NOT NULL,
  `harga_jasa` decimal(10,0) NOT NULL,
  `deskripsi` text NOT NULL,
  `lokasi_wisata` varchar(50) NOT NULL,
  `status_avail` int(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `jasa`
--

INSERT INTO `jasa` (`jasa_id`, `pemandu_id`, `alamatcategory_id`, `nama_jasa`, `harga_jasa`, `deskripsi`, `lokasi_wisata`, `status_avail`) VALUES
(1, 2, 17, 'Keliling Kampus IPB', '30000', 'Jasa oleh Emiel', 'Institut Pertanian Bogor', 1);

-- --------------------------------------------------------

--
-- Table structure for table `pemandu`
--

CREATE TABLE `pemandu` (
  `pemandu_id` int(11) NOT NULL,
  `user_id` int(25) NOT NULL,
  `alamatcategory_id` int(25) NOT NULL,
  `nama_company` varchar(30) NOT NULL,
  `alamat` varchar(100) NOT NULL,
  `deskripsi` text NOT NULL,
  `pemandu_status` varchar(20) NOT NULL,
  `pemandu_verifikasi` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pemandu`
--

INSERT INTO `pemandu` (`pemandu_id`, `user_id`, `alamatcategory_id`, `nama_company`, `alamat`, `deskripsi`, `pemandu_status`, `pemandu_verifikasi`) VALUES
(1, 22, 17, 'Dramaga Tour', 'Jl. Dramaga', 'Tour Guide di Dramaga', '1', '1'),
(2, 24, 17, 'Emiel Company', 'Jl raya dramaga', 'Tour Guide di Dramaga', '1', '1');

-- --------------------------------------------------------

--
-- Table structure for table `pictures`
--

CREATE TABLE `pictures` (
  `picture_id` int(13) NOT NULL,
  `produk_id` int(13) NOT NULL,
  `user_id` int(13) NOT NULL,
  `kode_tipe` varchar(35) NOT NULL,
  `directory` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pictures`
--

INSERT INTO `pictures` (`picture_id`, `produk_id`, `user_id`, `kode_tipe`, `directory`) VALUES
(6, 2, 24, 'BuktiPembayaranHomestay', './public/uploads/buktipembayaran/homestayBuktiPembayaranHomestay-2.png'),
(7, 1, 22, 'BuktiPembayaranJasa', './public/uploads/buktipembayaran/jasaBuktiPembayaranJasa-1.png'),
(8, 1, 24, 'BuktiPembayaranBarang', './public/uploads/buktipembayaran/barangBuktiPembayaranBarang-1.png');

-- --------------------------------------------------------

--
-- Table structure for table `review_produk`
--

CREATE TABLE `review_produk` (
  `review_id` int(13) NOT NULL,
  `user_id` int(13) NOT NULL,
  `produk_id` int(13) NOT NULL,
  `tipe_produk` int(13) NOT NULL,
  `isi_review` text NOT NULL,
  `jumlah_star` int(13) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tarif`
--

CREATE TABLE `tarif` (
  `tarif_id` int(11) NOT NULL,
  `kota` varchar(100) NOT NULL,
  `kecamatan` varchar(500) NOT NULL,
  `reg` int(10) NOT NULL,
  `oke` int(10) NOT NULL,
  `yes` int(10) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `tarif`
--

INSERT INTO `tarif` (`tarif_id`, `kota`, `kecamatan`, `reg`, `oke`, `yes`) VALUES
(1, 'Kota Mataram', 'Mataram, Ampenan, Cakranegara', 25000, 22000, 32000),
(2, 'Kota Bima', 'Bima, Asakota, Rasanae Barat, Rasanae Timur, Raba, Mpunda', 35000, 30000, 0),
(3, 'Kab. Dompu', 'Dompu', 35000, 30000, 0),
(4, 'Kab. Dompu', 'Woja, Manggelewa', 44000, 38000, 0),
(5, 'Kab. Dompu', 'Kempo, Kilo, Pajo, Pekat', 66000, 0, 0),
(6, 'Kab. Lombok Tengah', 'Praya, Praya Barat Daya, Praya Timur, Praya Barat, Praya Tengah', 35000, 30000, 0),
(7, 'Kab. Lombok Tengah', 'Kopang, Jonggat, Janapria, Pringgarata, Pujut, Batukliang Utara, Batukliang', 44000, 38000, 0),
(8, 'Kab. Lombok Timur', 'Selong', 35000, 30000, 0),
(9, 'Kab. Lombok Timur', 'Wanasaba, Suralaga, Suela, Sakra Timur, Sakra Barat, Pringgasela, Montong Gading, Jerowaru, Terara, Sukamulia, Aikmel, Keruak, Mas Bagik, Labuhan Haji, Sakra, Sikur', 44000, 38000, 0),
(10, 'Kab. Lombok Timur', 'Pringgabaya, Sambelia, Sembalun', 66000, 0, 0),
(11, 'Kab. Sumbawa', 'Sumbawa Besar, Sumbawa', 35000, 30000, 0),
(12, 'Kab. Sumbawa', 'Moyohulu, Labuhan Badas, Alas Barat, UtanRhee, Plampang, Alas, Moyohilir, LapeLopok, Empang', 44000, 38000, 0),
(13, 'Kab. Sumbawa', 'Ropang, Lunyuk, Labangka, Batu Lanteh', 66000, 0, 0),
(14, 'Kab. Lombok Barat', 'Gerung', 35000, 30000, 0),
(15, 'Kab. Lombok Barat', 'Lingsar, Lembar, Kuripan, Gunung Sari, Batu Layar, Tanjung, Narmada, Labu Api, Kediri', 44000, 38000, 0),
(16, 'Kab. Lombok Barat', 'Sekotong Tengah, Kayangan, Gangga, Bayan, Pemenang', 66000, 0, 0),
(17, 'Kab. Sumbawa Barat', 'Taliwang', 35000, 30000, 0),
(18, 'Kab. Sumbawa Barat', 'Jereweh, Sekongkang, Brang Rea', 44000, 38000, 0),
(19, 'Kab. Sumbawa Barat', 'Seteluk', 66000, 0, 0),
(20, 'Kab. Bima', 'Woha', 35000, 30000, 0),
(21, 'Kab. Bima', 'Wawo, Sape, Monta, Mada Pangga, Lambu, Donggo, Bolo, Belo, Wera', 44000, 38000, 0),
(22, 'Kab. Bima', 'Langgudu, Sanggar, Tambora, Ambalawi', 66000, 0, 0),
(23, 'Kota Ambon', 'Ambon, Nusaniwe, Sirimau, Teluk Ambon Baguala, Teluk Ambon, Leitimur Selatan', 52000, 45000, 0),
(24, 'Kab. Maluku Tengah', 'Kota Masohi', 85000, 73000, 0),
(25, 'Kab. Maluku Tengah', 'Sala Hutu', 107000, 92000, 0),
(26, 'Kab. Maluku Tengah', 'Saparua, Nusa Laut, Amahai, Teon Nila Serua, Tehoru, Seram Utara, Pulau Haruku, Leihitu, Banda', 161000, 0, 0),
(27, 'Kab. Maluku Tenggara', 'Tual', 85000, 73000, 0),
(28, 'Kab. Maluku Tenggara', 'Kei Besar, Kei Besar Selatan, Kei Besar Utara Timur, Kei Kecil, PulauPulau Kur', 161000, 0, 0),
(29, 'Kab. Buru', 'Namlea', 85000, 73000, 0),
(30, 'Kab. Buru', 'Air Buaya / Buru Utara Barat, Leksula / Buru Selatan, Waesama, Wayapo / Buru Utara Timur', 161000, 0, 0),
(31, 'Kab. Kepulauan Aru', 'Dobo, PulauPulau Aru, PulauPulau Aru Selatan, PulauPulau Aru Tengah', 161000, 0, 0),
(32, 'Kab. Seram Bagian Barat', 'Piru, Kairatu, Seram Barat, Taniwel, Waisala', 161000, 0, 0),
(33, 'Kab. Seram Bagian Timur', 'Dataran Hunimoa, Bula, PulauPulau Gorong, Seram Timur, Werinama', 161000, 0, 0),
(34, 'Kab. Maluku Tenggara Barat', 'Saumlaki', 85000, 73000, 0),
(35, 'Kab. Maluku Tenggara Barat', 'Serwaru, Yaru, Wuarlabobar, Wertamrian, Wer Makatian, Tanimbar Utara, Tanimbar Selatan, Selaru, PulauPulau Wetar, PulauPulau Terselatan, PulauPulau Letimoa Lakor, PulauPulau Babar Timur, PulauPulau Babar, Nirunmas, Mola, Luser, Kormomolin, Damer', 161000, 0, 0),
(36, 'Kota Banjarmasin', 'Banjarmasin, Banjarmasin Barat, Banjarmasin Selatan, Banjarmasin Tengah, Banjarmasin Timur, Banjarmasin Utara', 30000, 26000, 38000),
(37, 'Kab. Hulu Sungai Tengah', 'Barabai', 42000, 36000, 0),
(38, 'Kab. Hulu Sungai Tengah', 'Batang Alai Tengah, Pandawan, Labuan Amas Utara, Labuan Amas Selatan, Haruyan, Batang Alai Utara, Batu Benawa, Batang Alai Selatan, Hantakan', 53000, 45000, 0),
(39, 'Kab. Hulu Sungai Selatan', 'Kandangan', 42000, 36000, 0),
(40, 'Kab. Hulu Sungai Selatan', 'Telaga Langsat, Sungai Raya, Simpur, Padang Batung, Loksado, Kalumpang, Daha Utara, Daha Selatan, Angkinang, Daha Barat', 53000, 45000, 0),
(41, 'Kab. Kota Baru', 'Kota Baru', 42000, 36000, 0),
(42, 'Kab. Kota Baru', 'Sungai Durian, Sampanahan, Pulau Sebuku, Pulau Sembilan, Pulau Laut Timur, Pulau Laut Barat, Pulau Laut Selatan, Pamukan Selatan, Pamukan Utara, Kelumpang Selatan, Kelumpang Hulu, Kelumpang Tengah, Kelumpang Utara, Hampang, Pulau Laut Utara', 53000, 45000, 0),
(43, 'Kab. Tabalong', 'Tanjung', 42000, 36000, 0),
(44, 'Kab. Tabalong', 'Upau, Tanta, Pugaan, Murung Pudak, Muara Uya, Muara Harus, Kelua, Jaro, Haruai, Banua Lawas, Bintang Ara', 53000, 45000, 0),
(45, 'Kota Banjarbaru', 'BanjarBaru, Cempaka, Landasan Ulin', 30000, 26000, 0),
(46, 'Kab. Hulu Sungai Utara', 'Amuntai, Amuntai Utara, Amuntai Selatan, Amuntai Tengah', 42000, 36000, 0),
(47, 'Kab. Hulu Sungai Utara', 'Babirik, Danau Panggang, Sungai Pandan, Banjang', 53000, 45000, 0),
(48, 'Kab. Barito Kuala', 'Marabahan', 42000, 36000, 0),
(49, 'Kab. Barito Kuala', 'Bakumpai, Tamban, Tabukan, Tabunganen, Rantau Badauh, Mekar Sari, Mandastana, Kuripan, Cerbon, Belawang, Barambai, Anjir Muara, Anjir Pasar, Alalak, Wanaraya', 53000, 45000, 0),
(50, 'Kab. Banjar', 'Martapura', 42000, 36000, 0),
(51, 'Kab. Banjar', 'Aranio, Sungai Pinang, Sungai Tabuk, Simpang Empat, Pengaron, Kertak Hanyar, Karang Intan, Gambut, Astambul, Aluh Aluh, Mataraman', 53000, 45000, 0),
(52, 'Kab. Tanah Laut', 'Pelaihari', 42000, 36000, 0),
(53, 'Kab. Tanah Laut', 'BatiBati, Jorong, Kintap, Kurau, Panyipatan, Takisung, Batu Ampar, Tambang Ulang', 53000, 45000, 0),
(54, 'Kab. Tampin', 'Rantau, Tapin Selatan, Tapin Tengah, Salam Babaris, Hatungun, Tapin Utara', 42000, 36000, 0),
(55, 'Kab. Tampin', 'Candi Laras Selatan, Candi Laras Utara, Lokpaikat, Piani, Bungur, Binuang, Bakarangan', 53000, 45000, 0),
(56, 'Kab. Barito Utara', 'Muara Teweh', 42000, 36000, 0),
(57, 'Kab. Barito Utara', 'Gunung Purei, Gunung Timang, Lahei, Montalat, Teweh Timur, Teweh Tengah', 53000, 45000, 0),
(58, 'Kab. Barito Timur', 'Tamiang Layang', 42000, 36000, 0),
(59, 'Kab. Barito Timur', 'Awang, Benua Lima, Dusun Tengah, Patangkep Tutui, Pematang Karau, Dusun Timur', 53000, 45000, 0),
(60, 'Kab. Murung Raya', 'Puruk Cahu', 42000, 36000, 0),
(61, 'Kab. Murung Raya', 'Laung Tuhup, Permata Intan, Sumber Barito, Tanah Siang, Murung', 53000, 45000, 0),
(62, 'Kab. Barito Selatan', 'Buntok', 42000, 36000, 0),
(63, 'Kab. Barito Selatan', 'Dusun Hilir, Dusun Utara, Jenamas, Karau Kuala, Dusun Selatan, Gunung Bintang Awai', 53000, 45000, 0),
(64, 'Kab. Balangan', 'Paringin', 42000, 36000, 0),
(65, 'Kab. Balangan', 'Awayan, Batu Mandi, Halong, Juai, Lampihong', 53000, 45000, 0),
(66, 'Kab. Tanah Bambu', 'Batu Licin', 42000, 36000, 0),
(67, 'Kab. Tanah Bambu', 'Kusan Hilir, Kusan Hulu, Satui, Sungai Loban', 53000, 45000, 0),
(68, 'Kota Bandung', 'Bandung, Bojongloa Kaler, Bojongloa Kidul, Cibeunying Kaler, Cibeunying Kidul, Cicendo, Coblong, Kiaracondong, Margacinta, Rancasari, Regol, Sukajadi, Batununggal, Bandung Wetan, Bandung Kulon, Cibiru, Ujungberung, Sukasari, Cicadas, Cidadap, Lengkong, Andir, Arcamanik, Astanaanyar, Babakanciparay, Bandung Kidul, Sumurbandung', 10000, 9000, 19000),
(69, 'Kab. Bandung', 'Soreang, Rancaekek', 10000, 9000, 19000),
(70, 'Kab. Bandung', 'Majalaya', 13000, 12000, 19000),
(71, 'Kab. Bandung', 'Ibun, Kertasari, Nagreg, Pacet, Pameungpeuk, Pangalengan, Paseh, Pasirjambu, Rancabali, Ciwidey, Cikancung, Cicalengka, Cimenyan, Cimaung', 16000, 15000, 0),
(72, 'Kab. Bandung', 'Cangkuang, Bojong Soang, Banjaran, Baleendah, Arjasari, Ciparay, Cilengkrang, Margahayu, Margaasih, Cileunyi, Katapang, Dayeuhkolot, Solokan Jeruk', 16000, 15000, 19000),
(73, 'Kota Cimahi', 'Cimahi, Cimahi Selatan, Cimahi Tengah, Cimahi Utara', 10000, 9000, 19000),
(74, 'Kab. Sumedang', 'Jatinangor', 10000, 9000, 19000),
(75, 'Kab. Sumedang', 'Sumedang', 13000, 12000, 19000),
(76, 'Kab. Sumedang', 'Jatinunggal, Tanjungkerta, Tanjungsari, Tomo, Ujung Jaya, Wado, Sumedang Utara, Cisarua, Cisitu, Jatigede, Surian, Sukasari, Buahdua, Cibugel, Cimalaka, Cimanggu, Conggeang, Darmaraja, Ganeas, Pamulihan, Paseh, Rancakalong, Situraja, Tanjungmedar', 16000, 15000, 0),
(77, 'Kab. Sumedang', 'Sumedang Selatan', 16000, 15000, 19000),
(78, 'Kota Tasikmalaya', 'Indihiang, Kawalu, Mangkubumi, Tawang', 13000, 12000, 0),
(79, 'Kota Tasikmalaya', 'Tasikmalaya, Cibeureum, Cihideung, Cipedes, Tamansari', 13000, 12000, 19000),
(80, 'Kota Banjar', 'Banjar, Langensari, Pataruman, Purwaharja', 13000, 12000, 0),
(81, 'Kab.Ciamis', 'Ciamis', 13000, 12000, 19000),
(82, 'Kab.Ciamis', 'Kalipucang, Lakbok, Langkap lancar, Padaherang, Pamarican, Pangandaran, Parigi, Rancah, Tambaksari, Purwadadi, Cidolog, Baregbeg, Lumbung, Mangunjaya, Sidamulih, Cisaga, Cimerak, Cijulang, Cihaurbeuti, Cijeungjing, Cikoneng, Cipaku, Jatinagara, Kawali, Panumbangan, Panawangan, Panjalu, Rajadesa, Sadananya, Sukadana, Banjarsari, Cimaragas, Cigugur, Sindangkasih', 16000, 15000, 0),
(83, 'Kab. Tasikmalaya', 'Singaparna', 13000, 12000, 0),
(84, 'Kab. Tasikmalaya', 'Manonjaya, Pancatengah, Rajapolah, Salopa, Sukaraja, Kadipaten, Bojongasih, Gunung Tanjung, Jatiwaras, Karangjaya, Padakembang, Pagerageung, Parungponteng, Puspahiang, Sukaratu, Sukaresik, Tanjungjaya, Karangnunggal, Jamanis, Cisayong, Bojonggambir, Cigalontang, Leuwisari, Sariwangi, Salawu, Sukarame, Mangunreja, Sodonghilir, Taraju, Bantarkalong, Culamega, Ciawi, Cibalong, Cikatomas, Cikalong, Cineam, Cipatujah, Sukahening', 16000, 15000, 0),
(85, 'Kab. Garut', 'Garut, Kab. Garut, Garut Kota', 13000, 12000, 19000),
(86, 'Kab. Garut', 'Wanaraja, Talegong, Sukawening, Singajaya, Selaawi, Samarang, Peundeuy, Pamulihan, Caringin, Karangtengah, Sukaresmi, Sucinaraja, Pasirwangi, Pangatikan, Mekarmukti, Kersamanah, Cihurip, Cigedug, Pameungpeuk, Pakenjeng, Cikelet, Cibiuk, Cibalong, Cibatu, Bungbulang, Balubur Limbangan, Bayongbong, Banyuresmi, Cikajang, Cilawu, Malangbong, Leuwigoong, Leles, Karangpawitan, Kadungora, Cisewu, Cisurupan, Cisompet, Banjarwangi', 16000, 15000, 0),
(87, 'Kab. Garut', 'Tarogong Kaler, Tarogong Kidul', 16000, 15000, 19000),
(88, 'Kab. Purwakarta', 'Purwakarta', 13000, 12000, 19000),
(89, 'Kab. Purwakarta', 'Bojong, Pondoksalam, Sukasari, Wanayasa, Tegalwaru, Maniis, Darangdan, Sukatani, Plered, Pasawahan, Kiarapedes', 16000, 15000, 0),
(90, 'Kab. Purwakarta', 'Cibatu, Bungursari, Babakancikao, Campaka, Jatiluhur', 16000, 15000, 19000),
(91, 'Kab. Bandung Barat', 'Ngamprah', 10000, 9000, 0),
(92, 'Kab. Bandung Barat', 'Cimareme, Lembang', 10000, 9000, 19000),
(93, 'Kab. Bandung Barat', 'Cisarua, Rongga, Parongpong, Sindangkerta, Gununghalu, Cipongkor, Cipatat, Cipeundeuy, Cililin, Cikalong Wetan', 16000, 15000, 0),
(94, 'Kab. Bandung Barat', 'Padalarang, Cihampelas, Batujajar', 16000, 15000, 19000),
(95, 'Kab. Subang', 'Subang', 13000, 12000, 19000),
(96, 'Kab. Subang', 'Pamanukan, Patok Beusi, Purwadadi, Pusakanagara, Sagalaherang, Tanjung Siang, Cikaum, Cipunagara, Legon Kulon, Pabuaran, Kalijati, Cipeundeuy, Binong, Blanakan, Ciasem, Cibogo, Cijambe, Cisalak, Compreng, Jalan Cagak, Pagaden', 16000, 15000, 0),
(97, 'Kota Bekasi', 'Bekasi, Pondok Melati, Pondokgede, Mustika Jaya, Medan Satria, Jatisampurna, Jatiasih, Bekasi Utara, Bekasi Timur, Bekasi Selatan, Bekasi Barat, Bantar Gebang, Rawalumbu', 8000, 7000, 15000),
(98, 'Kab. Bekasi', 'Bojongmanggu, Sukatani, Pebayuran, Muara Gembong, Tambelang, Karangbahagia, Sukakarya, Cabangbungin, Sukawangi, Setu', 8000, 7000, 0),
(99, 'Kab. Bekasi', 'Tambun Selatan, Tambun Utara, Tarumajaya, Babelan, Serang Baru, Cikarang Barat, Cikarang Pusat, Cikarang Selatan, Cikarang Timur, Cikarang Utara, Cibarusah, Cibitung, Kedungwaringin, Cikarang', 8000, 7000, 15000),
(100, 'Kota Bengkulu', 'Bengkulu, Gading Cempaka, Kampung Melayu, Muara Bangkahulu, Ratu Agung, Ratu Samban, Selebar, Sungai Serut, Teluk Segara', 22000, 19000, 29000),
(101, 'Kab. Bengkulu Utara', 'Arga Makmur', 35000, 30000, 0),
(102, 'Kab. Bengkulu Utara', 'Putri Hijau, Taba Penanjung, Pondok Kelapa, Pematang Tiga, Pagar Jati, Ketahun, Kerkap, Karang Tinggi, Air Napal, Air Besi, Padang Jaya, Lais, Giri Mulia, Batik Nau, Talang Empat', 44000, 38000, 0),
(103, 'Kab. Bengkulu Utara', 'Enggano, Napal Putih', 66000, 0, 0),
(104, 'Kab. Rejang Lebong', 'Curup', 35000, 30000, 0),
(105, 'Kab. Rejang Lebong', 'Kota Padang, Padang Ulak Tanding, Bermani Ulu, Selupu Rejang, Sindang Kelingi', 44000, 38000, 0),
(106, 'Kab. Bengkulu Selatan', 'Kota Manna', 35000, 30000, 0),
(107, 'Kab. Bengkulu Selatan', 'Kedurang, Pino, Manna, Pinoraya, Seginim', 44000, 38000, 0),
(108, 'Kab. Kaur', 'Kaur, Kaur Selatan, Kaur Tengah, Kaur Utara', 35000, 30000, 0),
(109, 'Kab. Kaur', 'Kinal, Nasal, Tanjung Kemuning, Maje', 44000, 38000, 0),
(110, 'Kab. Kepahiang', 'Kepahiang', 35000, 30000, 0),
(111, 'Kab. Kepahiang', 'Bermani Ilir, Tebat Karai, Ujan Mas', 44000, 38000, 0),
(112, 'Kab. Lebong', 'Lebong, Lebong Atas, Lebong Selatan, Lebong Tengah, Lebong Utara', 35000, 30000, 0),
(113, 'Kab. Lebong', 'Rimbo Pengadang', 44000, 38000, 0),
(114, 'Kab. MukoMuko', 'Mukomuko, MukoMuko Selatan, MukoMuko Utara', 35000, 30000, 0),
(115, 'Kab. MukoMuko', 'Lubuk Pinang, Pondok Suguh, Teras Terunjam', 44000, 38000, 0),
(116, 'Kab. Seluma', 'Tais', 35000, 30000, 0),
(117, 'Kab. Seluma', 'Ulu Talo, Talo, Sukaraja, Semidang Alas Maras, Semidang Alas, Seluma Utara, Seluma Timur, Seluma Selatan, Seluma Barat, Seluma, Lubuk Sandi, Ilir Talo, Air Periukan, Talo Kecil', 44000, 38000, 0),
(118, 'Kota Bogor', 'Bogor, Bogor Barat, Bogor Selatan, Bogor Tengah, Bogor Timur, Bogor Utara, Tanah Sereal', 8000, 7000, 15000),
(119, 'Kab. Bogor', 'Parung Panjang, Pamijahan, Gunung Sindur, Jasinga, Jonggol, Leuwisadeng, Nanggung, Rumpin, Tenjo, Ranca Bungur, Sukajaya, Sukamakmur, Tenjolaya, Cariu, Tanjungsari, Cigombong, Tamansari, Cigudeg, Cijeruk', 8000, 7000, 0),
(120, 'Kab. Bogor', 'Tajurhalang, Kemang, Ciseeng, Sukaraja, Klapanunggal, Bojonggede, Babakan Madang, Caringin, Ciawi, Ciampea, Cibungbulang, Cileungsi, Ciomas, Cisarua, Citeureup, Dramaga, Leuwiliang, Megamendung, Parung, Cibinong, Gunung Putri', 8000, 7000, 15000),
(121, 'Kota Balikpapan', 'Balikpapan, Balikpapan Barat, Balikpapan Selatan, Balikpapan Tengah, Balikpapan Timur, Balikpapan Utara', 36000, 31000, 45000),
(122, 'Kab. Kutai Kartanegara', 'Muara Badak, Tenggarong, SangaSanga, Loa Kulu', 55000, 47000, 0),
(123, 'Kab. Kutai Kartanegara', 'Marang Kayu, Muara Wis, Tenggarong Seberang, Anggana, Loa Janan, Sebulu, Muara Muntai, Muara Kaman, Kota Bangun', 69000, 59000, 0),
(124, 'Kab. Kutai Kartanegara', 'Muara Jawa, Samboja', 77000, 65000, 0),
(125, 'Kab. Kutai Kartanegara', 'Tabang, Kembang Janggut, Kenohan', 104000, 0, 0),
(126, 'Kab. Paser', 'Tanah Grogot', 61000, 52000, 0),
(127, 'Kab. Paser', 'Long Ikis, Long Kali, Kuaro, Batu Sopang, Muara Komam', 77000, 65000, 0),
(128, 'Kab. Paser', 'Muara Samu, Tanjung Harapan, Batu Engau, Pasir Balengkong', 116000, 0, 0),
(129, 'Kab. Berau', 'Tanjung Redeb', 61000, 52000, 0),
(130, 'Kab. Berau', 'Teluk Bayur, Maratua, Talisayan, Segah, Sambaliung, Pulau Derawan, Kelay, Gunung Tabur, Biduk Biduk, Tubaan', 77000, 65000, 0),
(131, 'Kab. Panajam Paser Utara', 'Penajam', 61000, 52000, 0),
(132, 'Kab. Panajam Paser Utara', 'Waru, Babulu', 77000, 65000, 0),
(133, 'Kab. Panajam Paser Utara', 'Sepaku', 116000, 0, 0),
(134, 'Kota Bontang', 'Bontang, Bontang Barat, Bontang Selatan, Bontang Utara', 49000, 42000, 0),
(135, 'Kab. Kutai Timur', 'Sangatta, Swarga Bara, Sangkima, Sangatta Selatan, Singa Gembara, Teluk Pandan', 52000, 45000, 0),
(136, 'Kab. Kutai Timur', 'Kaliorang, Sangkulirang, Bengalon, Rantau Pulung, Muara Wahau', 65000, 57000, 0),
(137, 'Kab. Kutai Timur', 'Muara Bengkal, Karangan, Batu Ampar, Telen, Kaubun, Kongbeng, Sandaran, Long Masengat, Busang, Muara Ancalong', 98000, 0, 0),
(138, 'Kota Batam', 'Belakang Padang, Bulang Galang, Galang', 25000, 22000, 0),
(139, 'Kota Batam', 'Batam, Nongsa/ Kabil/ Lagoi, Sekupang/ Tanjung Ucang, Batu Ampar, Lubuk Baja, Sei Beduk', 25000, 22000, 32000),
(140, 'Kab. Lingga', 'Daik, Lingga, Singkep', 50000, 43000, 0),
(141, 'Kab. Lingga', 'Lingga Utara, Senayang, Singkep Barat', 95000, 0, 0),
(142, 'Kab. Natuna', 'Ranai', 50000, 43000, 0),
(143, 'Kab. Natuna', 'Pulau Laut, Subi, Siantan Timur, Siantan Selatan, Siantan, Serasan, Pal Matak, Midai, Jemaja Timur, Jemaja, Bunguran Utara, Bunguran Tengah, Bunguran Timur Laut, Bunguran Timur, Bunguran Barat, Pulau Tiga', 95000, 0, 0),
(144, 'Kab. Karimun', 'Tanjung Balai Karimun, Kundur', 50000, 43000, 0),
(145, 'Kab. Karimun', 'Tebing, Meral, Kundur Utara, Kundur Barat, Karimun, Tanjung Batu', 63000, 54000, 0),
(146, 'Kab. Karimun', 'Moro, Buru', 95000, 0, 0),
(147, 'Kota Banda Aceh', 'Banda Aceh, Syiah Kuala, Kuta Raja, Kuta Alam, Lueng Bata, Baiturrahman, Banda Raya, Jaya Baru, Meuraksa, Ulee Kareng', 33000, 29000, 0),
(148, 'Kota Langsa', 'Langsa, Langsa Barat, Langsa Kota, Langsa Lama, Langsa Teungoh, Langsa Timur', 48000, 41000, 0),
(149, 'Kota Lhokseumawe', 'Lhokseumawe, Muara Dua, Banda Sakti, Blang Mangat', 48000, 41000, 0),
(150, 'Kab. Aceh Besar', 'Janto', 48000, 41000, 0),
(151, 'Kab. Aceh Besar', 'Baitussalam, Darul Kamal, Krueng Barona Jaya, Kuta Cot Glie, Kuta Malaka, Lembah Seulawah, Leupung, Puroaceh, Simpang tiga, Suka Makmur, Peukan Bada, Darul Imarah, Darussalam, Indrapuri, Ingin Jaya, Kuta Baro, Lhoong, Mesjid Raya, Montasik, Seulimeum', 60000, 52000, 0),
(152, 'Kab. Bireuen', 'Bireuen', 48000, 41000, 0),
(153, 'Kab. Bireuen', 'Primbang, Peusangan Siblah Krueng, Peusangan Selatan, Pandrah, Kuta Blang, Kota Juang, Juli, Jeumpa, Jangka, Kuala, Makmur, Ganda Pura, Samalanga, Peudada, Peusangan, Jeunieb, Simpang Mamplam', 60000, 52000, 0),
(154, 'Kab. Aceh Tenggara', 'Kutacane', 48000, 41000, 0),
(155, 'Kab. Aceh Tenggara', 'Lawe Bulan, Darul Hasanah, Bukit Tusam, Babussalam, Babul Rahmat, Babul Makmur, Lawe Sigalagala, Lawe Alas, Bambel, Badar, Semadam', 60000, 52000, 0),
(156, 'Kab. Aceh Barat', 'Meulaboh', 48000, 41000, 0),
(157, 'Kab. Aceh Barat', 'Woyla Timur, Woyla Barat, Johan Pahlawan, Arongan Lambalek, Bubon, Woyla, Sungai Mas, Samatiga, Kec. Kaway XVI, Pante Ceureumen', 60000, 52000, 0),
(158, 'Kab. Pidie', 'Sigli', 48000, 41000, 0),
(159, 'Kab. Pidie', 'Pidie, Sakti, Simpang Tiga, Tangse, Tiro/Truseb, Titeua/Keumala, Gleumpang Baro, GrongGrong, Mane, Peukan Baro, Padang Tiji, Batee, Delima, Geumpang, Glumpang Tiga, Indrajaya, Kembang Tanjung, Mila, Muara Tiga, Mutiara, Mutiara Timur', 60000, 52000, 0),
(160, 'Kab. Aceh Tengah', 'Takengon', 48000, 41000, 0),
(161, 'Kab. Aceh Tengah', 'LautTawar, Kute Panang, Ketol, Kebayakan, Jagong Jeget, Celala, Bies, Atu Lintang, Silih Nara, Pegasing, Linge Isak, Bintang, Bebesen, Rusip Antara', 60000, 52000, 0),
(162, 'Kab. Aceh Selatan', 'Tapak Tuan', 48000, 41000, 0),
(163, 'Kab. Aceh Selatan', 'Trumon Timur, Pasie raja, Labuhan Haji Timur, Labuhan Haji Barat, Kluet Timur, Kluet Tengah, Bakongan Timur, Trumon, Sama Dua, Meukek, Labuhan Haji, Kluet Selatan, Kluet Utara, Bakongan, Sawang', 60000, 52000, 0),
(164, 'Kota Sabang', 'Sabang, Sukakarya, Sukajaya', 48000, 41000, 0),
(165, 'Kab. Aceh Barat Daya', 'Blangpidie', 48000, 41000, 0),
(166, 'Kab. Aceh Barat Daya', 'Babah Rot, kuala Batee, Manggeng, Susoh, Tangan Tangan', 60000, 52000, 0),
(167, 'Kab. Aceh Jaya', 'Krueng Sabee/Calang', 48000, 41000, 0),
(168, 'Kab. Aceh Jaya', 'Jaya, Pangat, Sampo Niet, Setia Bakti, Teunom', 60000, 52000, 0),
(169, 'Kab. Aceh Singkil', 'Singkil', 48000, 41000, 0),
(170, 'Kab. Aceh Singkil', 'Danau Paris, Gunung Meriah, Kota Baharu, Pulau Banyak, Simpang Kanan, Singkil Utara, Singkohor, Suro Baru', 60000, 52000, 0),
(171, 'Kab. Aceh Tamiang', 'Kuala Simpang', 48000, 41000, 0),
(172, 'Kab. Aceh Tamiang', 'Bendahara, Karang Baru, Kejuruan Muda, Manyak Payed, Rantau, Seuruway, Tamiang Hulu', 60000, 52000, 0),
(173, 'Kab. Aceh Timur', 'Idi Rayeuk', 48000, 41000, 0),
(174, 'Kab. Aceh Timur', 'Peureulak, Peureulak Barat, Peureulak Timur, Rantau Selamat, Ranto Peureulak, Serba Jadi/Lokop, Simpang Jernih, Simpang Ulim, Peudawa, Pante Beudari, Nurussalam, Banda Alam, Birem Bayeun, Darul Aman, Darul Iksan, Idi Tuning, Indra Makmur, Julok, Madat, Sungai Raya', 60000, 52000, 0),
(175, 'Kab. Aceh Utara', 'Lhoksukon', 48000, 41000, 0),
(176, 'Kab. Aceh Utara', 'Paya Bakong, Samudera, Sawang, Seunuddon, Simpang Keuramat, Syamtalira Aron, Syamtalira Bayu, Tanah Luas, Tanah Jambo Aye, Nisam, Nibong, Baktia, Baktia Barat, Cot Girek, Dewantara, Kuta Makmur, Langkahan, Matang Kuli, Meurah Mulia, Muara Batu, Tanah Pasir', 60000, 52000, 0),
(177, 'Kab. Bener Meriah', 'Simpang Tiga Redelon', 48000, 41000, 0),
(178, 'Kab. Bener Meriah', 'Bandar, Bukit, Permata, Pintu Rime, Syiah Kuala, Timang Gajah, Wih Pesam', 60000, 52000, 0),
(179, 'Kab. Gayo Lues', 'Blang Kejeren', 48000, 41000, 0),
(180, 'Kab. Gayo Lues', 'Teripe Jaya, Blang Jerango, Dabung Gelang, Blang Pegayon, Putri Betung, Terangon, Rikit Gaib, Pining, Kuta Panjang, Pantan Jaya', 60000, 52000, 0),
(181, 'Kab. Nagan Raya', 'Suka Makmue', 48000, 41000, 0),
(182, 'Kab. Nagan Raya', 'Beutong, Darul Makmur, Kuala, Seunagan, Seunagan Timur', 60000, 52000, 0),
(183, 'Kab. Pidie Jaya', 'Meureudu', 48000, 41000, 0),
(184, 'Kab. Pidie Jaya', 'Ulim, Jangka Buya, Bandar Dua, Meurah Dua, Bandar Baru, Panteraja, Trienggading', 60000, 52000, 0),
(185, 'Kab. Simeuleu', 'Sinabang, Alafan, Salang, Simeulue Tengah, Simeulue Timur, Simuelue Barat, Teluk Dalam, Teupah Selatan, Teupah Barat', 90000, 0, 0),
(186, 'Kota Subulussalam', 'Subulussalam, Simpang Kiri, Penanggalan, Rundeng, Sultan Daulat, Longkip', 48000, 41000, 0),
(187, 'Kota Cirebon', 'Cirebon, Cirebon Barat, Harjamukti, Kejaksan, Kesambi, Lemahwungkuk, Pekalipan', 10000, 9000, 19000),
(188, 'Kab. Indramayu', 'Indramayu, Jatibarang', 13000, 12000, 19000),
(189, 'Kab. Indramayu', 'Kroya, Lelea, Lohbener, Losarang, Sliyeg, Sukra, Arahan, Cantigi, Gantar, Sukagumiwang, Krangkeng, Kertasemaya, Anjatan, Bangodua, Bongas, Trisi, Cikedung, Gabus Wetan, Haurgeulis, Kandanghaur, Karangampel', 16000, 15000, 0),
(190, 'Kab. Indramayu', 'Juntiyuat, Balongan, Kedokan Bunder, Sindang, Widasari', 16000, 15000, 19000),
(191, 'Kab. Kuningan', 'Kuningan', 13000, 12000, 19000),
(192, 'Kab. Kuningan', 'Kalimanggis, Karangkancana, Lebakwangi, Luragung, Maleber, Mandirancan, Nusaherang, Pancalang, Pasawahan, Selajambe, Sindangagung, Subang, Cigandamekar, Kadugede, Japara, Ciwaru, Ciawi Gebang, Cibingbin, Cibeureum, Cidahu, Cigugur, Cilebak, Cimahi, Ciniru, Cipicung, Darma, Garawangi, Hantara', 16000, 15000, 0),
(193, 'Kab. Kuningan', 'Cilimus, Kramatmulya, Jalaksana', 16000, 15000, 19000),
(194, 'Kab. Majalengka', 'Majalengka, Kadipaten, Jatiwangi', 13000, 12000, 19000),
(195, 'Kab. Majalengka', 'Panyingkiran, Rajagaluh, Sukahaji, Sumber Jaya, Talaga, Banjaran, Cigasong, Cingambul, Palasah, Maja, Ligung, Argapura, Bantarujeg, Cikijing, Dawuan, Jatitujuh, Kertajati, Lemahsugih, Leuwimunding, Sindangwangi', 16000, 15000, 0),
(196, 'Kab. Cirebon', 'Losari', 13000, 12000, 0),
(197, 'Kab. Cirebon', 'Sumber, Palimanan', 13000, 12000, 19000),
(198, 'Kab. Cirebon', 'Karangsembung, Karangwareng, Sedong, Lemahabang, Pabedilan, Susukan, Susukanlebak, Waled, Pangenan, Panguragan, Pasaleman, Kapetakan, Kaliwedi, Arjawinangun, Astanajapura, Babakan, Beber, Ciledug, Cirebon Utara, Cirebon Selatan, Ciwaringin, Depok, Dukupuntang, Gempol, Gegesik', 16000, 15000, 0),
(199, 'Kab. Cirebon', 'Mundu, Tengah Tani, Plumbon, Plered, Weru, Gebang, Klangenan, Pabuaran, Kedawung', 16000, 15000, 19000),
(200, 'DKI Jakarta', 'Jakarta', 8000, 7000, 15000),
(201, 'Kota Administrasi Jakarta Barat', 'Jakarta Barat, Grogol, Kalideres, Kebon Jeruk, Kembangan, Palmerah, Taman Sari, Tambora, Cengkareng', 8000, 7000, 15000),
(202, 'Kota Administrasi Jakarta Selatan', 'Jakarta Selatan, Tebet, Setiabudi, Pesanggrahan, Pasar Minggu, Pancoran, Mampang Prapatan, Kebayoran Lama, Kebayoran Baru, Jagakarsa, Cilandak', 8000, 7000, 15000),
(203, 'Kota Administrasi Jakarta Pusat', 'Jakarta Pusat, Cempaka Putih, Gambir, Johar Baru, Kemayoran, Menteng, Sawah Besar, Senen, Tanah Abang', 8000, 7000, 15000),
(204, 'Kota Administrasi Jakarta Utara', 'Jakarta Utara, Kelapa Gading, Koja, Pademangan, Penjaringan, Tanjung Priok, Cilincing', 8000, 7000, 15000),
(205, 'Kota Administrasi Jakarta Timur', 'Jakarta Timur, Pasar Rebo, Matraman, Makassar, Kramat Jati, Jatinegara, Duren Sawit, Ciracas, Cipayung, Cakung, Pulo Gadung', 8000, 7000, 15000),
(206, 'Kota Administrasi Kepulauan Serib', 'uPulau Pramuka, uKepulauan Seribu Selatan, uKepulauan Seribu Utara', 8000, 7000, 0),
(207, 'Kota Cilegon', 'Cilegon, Merak, Cibeber, Citangkil, Ciwandan, Gerogol, Jombang, Purwakarta', 9000, 8000, 19000),
(208, 'Kab. Pandeglang', 'Pandeglang', 10000, 9000, 19000),
(209, 'Kab. Pandeglang', 'Angsana, Carita, Cibitung, Cigeulis, Cikedal, Cipeucang, Cisata, Kaduhejo, Karangtanjung, Panimbang, Patia, Picung, Sumur, Saketi, Pagelaran, Banjar, Bojong, Cadas Sari, Cibaliung, Cikeusik, Cimanggu, Cimanuk, Jiput, Labuan, Mandalawangi, Menes, Munjul, Sukaresmi', 13000, 12000, 0),
(210, 'Kab. Lebak', 'Rangkasbitung', 10000, 9000, 19000),
(211, 'Kab. Lebak', 'Leuwidamar, Maja, Malingping, Muncang, Panggarangan, Sajira, Wanasalam, Warunggunung, Curugbitung, Gunungkencana, Cipanas, Banjarsari, Bayah, Bojongmanik, Cibadak, Cibeber, Cijaku, Cikulur, Cileles, Cimarga, Sobang', 13000, 12000, 0),
(212, 'Kota Serang', 'Walantaka', 9000, 8000, 0),
(213, 'Kota Serang', 'Serang, Curug, Kasemen, Taktakan, Cipocok Jaya', 9000, 8000, 19000),
(214, 'Kab. Serang', 'Baros, Anyar', 10000, 9000, 0),
(215, 'Kab. Serang', 'Mancak, Pabuaran, Padarincang, Pamarayan, Petir, Pontang, Puloampel, Tanara, Tirtayasa, Tunjung Teja, Kragilan, Kopo, Binuang, Bojonegara, Carenang, Cikande, Cikeusal, Cinangka, Ciomas, Ciruas, Jawilan, Kibin, Waringinkurung', 13000, 12000, 0),
(216, 'Kab. Serang', 'Kramatwatu', 13000, 12000, 19000),
(217, 'Kab. Cilacap', 'Cilacap, Cilacap Selatan, Cilacap Utara, Cilacap Tengah', 15000, 13000, 0),
(218, 'Kab. Cilacap', 'Majenang', 17000, 15000, 0),
(219, 'Kab. Cilacap', 'Patimuan, Bantarsari, Sidareja, Sampang, Nusawungu, Maos, Wanar, Kroya, Kesugihan, Adipala, Binangun, Cimanggu, Cipari, Dayeuhluhur, Gandrungmangu, Jeruklegi, Karangpucung, Kawunganten, Kedungrejo, Kampung Laut', 23000, 19000, 0),
(220, 'Kota Jambi', 'Danau Teluk, Pelayangan', 20000, 17000, 0),
(221, 'Kota Jambi', 'Jambi, Jambi Selatan, Jambi Timur, Jelutung, Kota Baru, Pasar Jambi, Telanaipura', 20000, 17000, 29000),
(222, 'Kab. Tanjung Jabung Barat', 'Kualatungkal, Tungkal Ulu, Tungkal Ilir', 31000, 27000, 0),
(223, 'Kab. Tanjung Jabung Barat', 'Betara, Merlung, Pengabuan', 39000, 34000, 0),
(224, 'Kab. Merangin', 'Bangko', 31000, 27000, 0),
(225, 'Kab. Merangin', 'Muara Siau, Tabir, Pamenang, Tabir Ulu', 39000, 34000, 0),
(226, 'Kab. Merangin', 'Jangkat, Sungai Manau', 59000, 0, 0),
(227, 'Kab. Batang Hari', 'Muara Bulian', 31000, 27000, 0),
(228, 'Kab. Batang Hari', 'Batin XXIV, Maro Sebo Ulu, Mersam, Muara Tembesi, Pemayung, Bajubang, Maro Sebo Ilir', 39000, 34000, 0),
(229, 'Kab. Bungo', 'Muara Bungo', 31000, 27000, 0),
(230, 'Kab. Bungo', 'Muko Muko Batin VII, Limbur Lubuk Mengkuang, Bathin II Babeko, Tanah Tumbuh, Tanah Sepenggal, Rantau Pandan, Pelepat, Pelepat Ilir', 39000, 34000, 0),
(231, 'Kab. Bungo', 'Jujuhan', 59000, 0, 0),
(232, 'Kab. Kerinci', 'Sungai Penuh', 31000, 27000, 0),
(233, 'Kab. Kerinci', 'Sitinjau Laut, Keliling Danau, Hamparan Rawang, Air Hangat Timur, Gunung Kerinci, Danau Kerinci, Batang Merangin, Air Hangat', 39000, 34000, 0),
(234, 'Kab. Kerinci', 'Kayu Aro, Gunung Raya', 59000, 0, 0),
(235, 'Kab. Muaro Jambi', 'Sengeti', 31000, 27000, 0),
(236, 'Kab. Muaro Jambi', 'Jambi Luar Kota, Kumpeh, Kumpeh Ulu, Maro Sebo, Mestong, Sekernan, Sungai Bahar', 39000, 34000, 0),
(237, 'Kab. Sarolangun', 'Sarolangun', 31000, 27000, 0),
(238, 'Kab. Sarolangun', 'Muara Limun, Mandiangin, Pauh, Pelawan Singkut', 39000, 34000, 0),
(239, 'Kab. Sarolangun', 'Batang Asai', 59000, 0, 0),
(240, 'Kab. Tanjung Jabung Timur', 'Muara sabak', 31000, 27000, 0),
(241, 'Kab. Tanjung Jabung Timur', 'Dendang, Mendahara, Nipah Panjang, Sadu', 39000, 34000, 0),
(242, 'Kab. Tanjung Jabung Timur', 'Rantau Rasau', 59000, 0, 0),
(243, 'Kab. Tebo', 'Muara Tebo, Tebo Ulu, Tebo Tengah, Tebo Ilir', 31000, 27000, 0),
(244, 'Kab. Tebo', 'Sumay, Rimbo Ulu, Rimbo Ilir, Rimbo Bujang, Tengah Ilir, VII Koto', 39000, 34000, 0),
(245, 'Kota Jayapura', 'Jayapura, Abepura, Jayapura Selatan, Jayapura Utara, Muara Tam', 80000, 68000, 0),
(246, 'Kab. Jayapura', 'Sentani', 108000, 92000, 0),
(247, 'Kab. Jayapura', 'Sentani Barat, Nimbokrang, Kemtuk, Unurum Guay, Demta, Nimboran, Kemtuk Gresie, Kareuh, Depapre, Sentani Timur', 135000, 115000, 0),
(248, 'Kab. Biak Numfor', 'Biak Kota', 108000, 92000, 0),
(249, 'Kab. Biak Numfor', 'Warsa, Samofa, Kepulauan Padaidio, Numfor Timur, Numfor Barat, Biak Utara, Biak timur, Biak Barat, Yendidori', 135000, 115000, 0),
(250, 'Kab. Merauke', 'Merauke', 108000, 92000, 0),
(251, 'Kab. Merauke', 'Sota, Semangga, Kurik, Jagebob, Eligobel, Distrik Ulilin, Okaba, Muting, Kimaam, Tanah Miring', 135000, 115000, 0),
(252, 'Kab. Yapen Waropen', 'Serui', 108000, 92000, 0),
(253, 'Kab. Yapen Waropen', 'Yapen Barat, Yapen Timur, Angkaisera, Poom, Yapen Selatan', 135000, 115000, 0),
(254, 'Kab. Jayawijaya', 'Wamena', 108000, 92000, 0),
(255, 'Kab. Jayawijaya', 'Mapenduma, Kobakma, Kenyam, Hubikosi, Gamelia, Bolakma, Apalapsili, Abenaho, Tiom, Maki, Kurulu, Kelila, Asologaima, Pirime', 135000, 115000, 0),
(256, 'Kab. Asmat', 'Agats', 108000, 92000, 0),
(257, 'Kab. Asmat', 'Akat, Atsy, Fayit, Pantai Kasuari, Sawaerma, Suator', 135000, 115000, 0),
(258, 'Kab. Boven Digoel', 'Tanah Merah/ Boven Digoel', 108000, 92000, 0),
(259, 'Kab. Boven Digoel', 'Distrik Bomakia, Jair, Kouh, Mandobo, Mindiptana, Waropko', 135000, 115000, 0),
(260, 'Kab. Keerom', 'Waris', 108000, 92000, 0),
(261, 'Kab. Keerom', 'Arso, Senggi, Skanto, Web', 135000, 115000, 0),
(262, 'Kab. Pegunungan Bintang', 'Oksibil', 108000, 92000, 0),
(263, 'Kab. Pegunungan Bintang', 'Batom, Borme, Iwur, Kiwirok, Okbibab', 135000, 115000, 0),
(264, 'Kab. Sarmi', 'Sarmi', 108000, 92000, 0),
(265, 'Kab. Sarmi', 'Bonggo, Pantai Barat, Pantai Timur, Tor Atas', 135000, 115000, 0),
(266, 'Kab. Supiori', 'Sorendiweri', 108000, 92000, 0),
(267, 'Kab. Supiori', 'Supiori Selatan, Supiori Timur, Supiori Utara', 135000, 115000, 0),
(268, 'Kab. Talikora', 'Karubaga', 108000, 92000, 0),
(269, 'Kab. Talikora', 'Bokondini', 135000, 115000, 0),
(270, 'Kab. Talikora', 'Kanggime, Kembu', 203000, 0, 0),
(271, 'Kab. Waropen', 'Botawa, Masirei, Waropen Bawah', 203000, 0, 0),
(272, 'Kab. Yahukimo', 'Sumohai, Anggruk, Kurima, Ninia', 203000, 0, 0),
(273, 'Kab. Mamberamo Raya', 'Burmeso, Mamberamo Tengah, Mamberamo Ilir, Mamberamo Ulu, Mamberamo Tengah Timur, Rufaer, Waropen Atas, Benuki, Sawai', 203000, 0, 0),
(274, 'Kota Depok', 'Depok, Cibubur, Cimanggis, Sawangan, Beji, Limo, Pancoran Mas, Sukmajaya', 8000, 7000, 15000),
(275, 'Kota Denpasar', 'Denpasar, Denpasar Barat, Denpasar Selatan, Denpasar Timur', 20000, 17000, 26000),
(276, 'Kab. Karangasem', 'Amlapura, Karangasem', 26000, 23000, 0),
(277, 'Kab. Karangasem', 'Abang, Bebandem, Kubu, Manggis, Rendang, Selat, Sidemen', 29000, 29000, 0),
(278, 'Kab. Bangli', 'Bangli', 26000, 23000, 0),
(279, 'Kab. Bangli', 'Kintamani, Susut, Tembuku', 29000, 29000, 0),
(280, 'Kab. Gianyar', 'Gianyar', 26000, 23000, 0),
(281, 'Kab. Gianyar', 'Blahbatuh, Payangan, Sukawati, Tampaksiring, Tegal Lalang, Ubud', 29000, 29000, 0),
(282, 'Kab. Jembrana', 'Negara', 26000, 23000, 0),
(283, 'Kab. Jembrana', 'Melaya, Mendoyo, Pekutatan', 29000, 29000, 0),
(284, 'Kab. Klungkung', 'Semarapura, Klungkung', 26000, 23000, 0),
(285, 'Kab. Klungkung', 'Dawan, Nusapenida, Banjarangkan', 29000, 29000, 0),
(286, 'Kab. Buleleng', 'Singaraja', 26000, 23000, 0),
(287, 'Kab. Buleleng', 'Tejakula, Sukasada, Seririt, Sawan, Kubutambahan, Gerokgak, Busung Biu, Banjar, Buleleng', 29000, 29000, 0),
(288, 'Kab. Tabanan', 'Tabanan', 26000, 23000, 0),
(289, 'Kab. Tabanan', 'Selemadeg Barat, Selemadeg, Penebel, Pupuan, Marga, Kerambitan, Kediri, Baturiti, Selemadeg Timur', 29000, 29000, 0),
(290, 'Kab. Badung', 'Kuta, Legian, Ngurah Rai, Sanur, Jimbaran, Nusa Dua', 20000, 17000, 26000),
(291, 'Kab. Badung', 'Menguwi', 26000, 23000, 0),
(292, 'Kab. Badung', 'Abiansemal, Petang', 29000, 29000, 0),
(293, 'Kota Gorontalo', 'Gorontalo, Dungingi, Kota Barat, Kota Selatan, Kota Timur, Kota Utara', 45000, 39000, 0),
(294, 'Kab. Gorontalo', 'Limboto, Limboto Barat', 53000, 46000, 0),
(295, 'Kab. Gorontalo', 'Tolangohula, Telaga, Pulubala, Mootilango, Bongomeme, Boliyohuto, Anggrek, Tibawa, Sumalata, Batudaa, Atinggola, Tolinggula', 67000, 58000, 0),
(296, 'Kab. Boalemo', 'Tilamuta', 53000, 46000, 0),
(297, 'Kab. Boalemo', 'Botumoito, Dulupi, Mananggu, Paguyaman, Wonosari', 67000, 58000, 0),
(298, 'Kota Bone Bolango', 'Suwawa', 53000, 46000, 0),
(299, 'Kota Bone Bolango', 'Bone Panta, Kabila, Tapa', 67000, 58000, 0),
(300, 'Kab. Gorontalo Utara', 'Kwandang', 53000, 46000, 0),
(301, 'Kab. Gorontalo Utara', 'Anggrek, Atinggota, Sumalata, Tolingula', 67000, 58000, 0),
(302, 'Kab. Pahuwalo', 'Marisa', 53000, 46000, 0),
(303, 'Kab. Pahuwalo', 'Lemito, Paguat, Patilanggio, Popayato, Randangan, Taluditi', 67000, 58000, 0),
(304, 'Kab. Jember', 'Jember', 20000, 17000, 0),
(305, 'Kab. Jember', 'Silo, Sukorambi, Sukowono, Sumberbaru, Sumberjambe, Tanggul, Tempurejo, Umbulsari, Wuluhan, Ajung, Jombang, Kaliwates, Patrang, Semboro, Rambipuji, Puger, Ambulu, Arjasa, Balung, Bangsalsari, Gumukmas, Jelbuk, Jenggawah, Kalisat, Kencong, Ledokombo, Mayang, Mumbulsari, Pakusari, Panti, Sumbersari', 29000, 27000, 0),
(306, 'Kab. Banyuwangi', 'Banyuwangi', 24000, 21000, 0),
(307, 'Kab. Banyuwangi', 'Songgon, Srono, Tegaldlimo, Wongsorejo, Glagah, Giri, Kalipuro, Licin, Sempu, Siliragung, Singojuruh, Rogojampi, Bangorejo, Cluring, Gambiran, Genteng, Glenmore, Kabat, Kalibaru, Muncar, Pesanggaran, Purwoharjo, Tegalsari', 29000, 27000, 0),
(308, 'Kab. Bondowoso', 'Bondowoso', 24000, 21000, 0),
(309, 'Kab. Bondowoso', 'Tamanan, Tapen, Tegalampel, Tenggarang, Tlogosari, Wonosari, Wringin, Binakal, Sukosari, Sempol, Cermee, Curahdami, Grujugan, Klabang, Maesan, Pakem, Prajekan, Pujer, Sumberwringin', 29000, 27000, 0),
(310, 'Kota Yogyakarta', 'Yogyakarta, Umbulharjo, Pakualaman, Ngampilan, Mergangsan, Mantrijeron, Kraton, Kotagede, Gondomanan, Gondokusuman, Gedongtengen, Danurejan, Jetis, Tegalrejo, Wirobrajan', 16000, 14000, 24000),
(311, 'Kab. Bantul', 'Bantul', 16000, 14000, 24000),
(312, 'Kab. Bantul', 'Kasihan, Banguntapan, Srandakan, Sedayu, Sanden, Pundong, Pleret, Piyungan, Pandak, Pajangan, Kretek, Jetis, Imogiri, Dlingo, Bambanglipuro, Sewon', 25000, 22000, 24000),
(313, 'Kab. Sleman', 'Sleman, Prambanan', 16000, 14000, 24000),
(314, 'Kab. Sleman', 'Gamping, Depok, Turi, Tempel, Seyegan, Pakem, Ngemplak, Ngaglik, Moyudan, Minggir, Kalasan, Godean, Cangkringan, Berbah, Mlati', 25000, 22000, 24000),
(315, 'Kab. Kulon Progo', 'Wates', 20000, 17000, 24000),
(316, 'Kab. Kulon Progo', 'Sentolo, Samigaluh, Pengasih, Panjatan, Nanggulan, Lendah, Kokap, Kalibawang, Girimulyo, Galur, Temon', 25000, 22000, 0),
(317, 'Kab. Gunung Kidul', 'Wonosari', 20000, 17000, 24000),
(318, 'Kab. Gunung Kidul', 'Saptosari, Purwosari, Girisubo, Gedangsari, Tepus, Semanu, Semin, Rongkop, Ponjong, Playen, Patuk, Panggang, Paliyan, Nglipar, Ngawen, Karangmojo, Tanjungsari', 25000, 22000, 0),
(319, 'Kota Kendari', 'Kendari, Abeli, Baruga, Kendar, Barat, Mandonga, Poasia', 45000, 39000, 0),
(320, 'Kab. Kota BauBau', 'Bau  Bau, Bungi, Betoambari, Kokalukuna, Murhum, Sorowalio, Wolio', 62000, 53000, 0),
(321, 'Kab. Kolaka', 'Kolaka', 62000, 53000, 0),
(322, 'Kab. Kolaka', 'Mowewe, Tanggetada, Samaturu, Latambaga, Lambadia, Baula, Ladongi, Wolo, Watubangga, Tirawuta, Pomalaa, Wundulako', 78000, 67000, 0),
(323, 'Kab. Kolaka', 'Uluiwoi', 117000, 0, 0),
(324, 'Kab. Muna', 'Raha', 62000, 53000, 0),
(325, 'Kab. Muna', 'Kulisusu Barat, Kulisusu Utara, Kusambi, Lasalepa, Maginti, Maligano, Pasir Putih, Tikep, Tiworo Tengah, Wakorumba, Barangka, Kambowa, Kontunaga, Katobu, Bonegunu, Duruka Bone, Kabangka, Kabawo, Kulisusu, Lawa, Lohia, Napabalano, Parigi, Sawerigadi, Tongkuno, Batalaiworu, Watopute', 78000, 67000, 0),
(326, 'Kab. Muna', 'Wakorumba Selatan', 117000, 0, 0),
(327, 'Kab. Konawe', 'Unaaha', 62000, 53000, 0),
(328, 'Kab. Konawe', 'Lambuya, Uepai, Tongauna, Sawa, Latoma, Bondoala Sampara, Waworete, Abuki, Soropia, Lasolo, Asera, Wawotobi, Pondidaha, Wonggeduku', 78000, 67000, 0),
(329, 'Kab. Konawe', 'Wawonii', 117000, 0, 0),
(330, 'Kab. Bombana', 'Rumbia', 62000, 53000, 0),
(331, 'Kab. Bombana', 'Kabaena, Kabaena Timur, Poleang, Poleang Barat, Poleang Timur, Rarowatu', 78000, 67000, 0),
(332, 'Kab. Buton & Buton Utara', 'Pasar Wajo', 62000, 53000, 0),
(333, 'Kab. Buton & Buton Utara', 'Lakudo, Kapontori, Mawasangka Timur, Sampolawa, Siompu, Batauga, Buranga', 78000, 67000, 0),
(334, 'Kab. Buton & Buton Utara', 'Lasalimu, Talaga Raya, Batu Atas, E, Kadatua, Mawasangka, Lasalimu Selatan', 117000, 0, 0),
(335, 'Kab. Kolaka Utara', 'Lasusua', 62000, 53000, 0),
(336, 'Kab. Kolaka Utara', 'Kodeoha, Ngapa, Pakue, Ranteangin', 78000, 67000, 0),
(337, 'Kab. Kolaka Utara', 'Batu Putih', 117000, 0, 0),
(338, 'Kab. Konawe Utara/ Selatan', 'Andolo/Wanggodo', 62000, 53000, 0),
(339, 'Kab. Konawe Utara/ Selatan', 'Ranomeeto, Palangga, Moramo, Laonti, Landono, Lainea, Konda, Kolono, Angata, Tinanggea', 78000, 67000, 0),
(340, 'Kab. Wakatobi', 'WangiWangi', 62000, 53000, 0),
(341, 'Kab. Wakatobi', 'WangiWangi Selatan, Kaledupa', 78000, 67000, 0),
(342, 'Kab. Wakatobi', 'Tomia, Binongko', 117000, 0, 0),
(343, 'Kota Kediri', 'Kediri, Mojoroto, Pesantren', 20000, 17000, 27000),
(344, 'Kab. Kediri', 'Gampengrejo, Semen, Tarokan, Wates, Pare, Kandangan, Kepung, Ngancar, Puncu, Banyakan, Kayen Kidul, Purwoasri, Plosoklaten, Grogol, Gurah, Kandat, Kras, Kunjang, Mojo, Ngadiluwih, Pagu, Papar, Plemahan, Ringinrejo', 24000, 21000, 0),
(345, 'Kota Kupang', 'Kupang, Alak, Kelapa Lima, Mawlapa, Oebobo', 50000, 43000, 0),
(346, 'Kab. Sumba Tengah', 'Waibakul, Mamboro, Umbu Ratu Nggay, Umbu Ratu Nggay Barat, Katikutana', 123000, 0, 0),
(347, 'Kab. Belu', 'Atambua', 65000, 56000, 0),
(348, 'Kab. Belu', 'Malaka Tengah, Lamakmen, Tasefeto Barat', 82000, 70000, 0),
(349, 'Kab. Belu', 'Sasita Mean, Kobalima, Rinhat, Malaka Timur, Raihat, Malaka Barat, Kakuluk Mesak, Tasifeto Timur', 123000, 0, 0),
(350, 'Kab. Alor', 'Kalabahi', 65000, 56000, 0),
(351, 'Kab. Alor', 'Teluk Mutiara', 82000, 70000, 0),
(352, 'Kab. Alor', 'Alor Barat Laut, Alor Timur, Pantar, Alor Selatan, Alor Barat Daya, Pantar Barat, Alor Tengah Utara, Alor Timur Laut', 123000, 0, 0),
(353, 'Kab. Timor Tengah Utara', 'Kefamenanu', 65000, 56000, 0),
(354, 'Kab. Timor Tengah Utara', 'Biboki Selatan, Biboki Utara, Insana, Miomafo Timur, Miomafo Barat, Biboki Anleu, Insana Utara, Neomuti', 82000, 70000, 0),
(355, 'Kab. Flores Timur', 'Larantuka', 65000, 56000, 0),
(356, 'Kab. Flores Timur', 'Witihama, Titihena, Kelubagolit, Ile Mandiri, Ile Boleng, Wulanggitan, Tanjung Bunga, Wotan Ulu mado', 82000, 70000, 0),
(357, 'Kab. Flores Timur', 'Adonara Barat, Adonara Timur, Solor Barat, Solor Timur', 123000, 0, 0),
(358, 'Kab. Sikka', 'Maumere', 65000, 56000, 0),
(359, 'Kab. Sikka', 'Nitta, Alok', 82000, 70000, 0),
(360, 'Kab. Sikka', 'Waigete, Palue, Mego, Talibura, Paga, Lela, Kewapante, Bola', 123000, 0, 0),
(361, 'Kab. Manggarai', 'Ruteng', 65000, 56000, 0),
(362, 'Kab. Manggarai', 'Wae Rii, Sambi Rambas, Ponco Ranaka, Mborong, Komba, Satarmese, Reo, Lambaleda, Cibal', 123000, 0, 0),
(363, 'Kab. Timor Tengah Selatan', 'Soe', 65000, 56000, 0),
(364, 'Kab. Timor Tengah Selatan', 'Kuan Fatu, Kualin, Nunkolo, Kie, Kalbano, Fatumnasi, Boking, Amanatun Timur, Amanatun Tengah, Amanuban Selatan, Amanatun Selatan, Amanatun Utara, Tionas', 82000, 70000, 0),
(365, 'Kab. Timor Tengah Selatan', 'Mollo Selatan, Polen, Oenino, Batu Putih, Amanuban Barat, Mollo Utara', 123000, 0, 0),
(366, 'Kab. Ende', 'Ende, Ende Utara, Ende Timur, Ende Tengah, Ende Selatan', 65000, 56000, 0),
(367, 'Kab. Ende', 'Detusoko, Nanga Panda, Ndona, Ndona Timur, Maukaro, Lio Timur, Kotabaru, Kelimutu, Wolo Waru, Detukeli, Magekoba/Maurole', 82000, 70000, 0),
(368, 'Kab. Ende', 'Wolojita, Wewaria, Pulau Ende', 123000, 0, 0),
(369, 'Kab. Ngada', 'Jere Buu, Ngada Bawa, Wogomang Ulewa', 82000, 70000, 0),
(370, 'Kab. Ngada', 'Bajawa, Aimere, Riung, Riung Barat, Soa, Golewa', 123000, 0, 0),
(371, 'Kab. Sumba Timur', 'Waingapu', 65000, 56000, 0),
(372, 'Kab. Sumba Timur', 'Wulla Waijelu, Umalulu, Rindi, Pinu Pahar, Pandawai, Nggaha Oriangu, Matawai Lapau, Karera, Kahaungu Eti, Haharu, Tabundung, Pahunga Lodu, Paberiwai, Lewa', 123000, 0, 0),
(373, 'Kab. Sumba Barat', 'Waikabubak', 65000, 56000, 0),
(374, 'Kab. Sumba Barat', 'Laratama, Walakaka', 123000, 0, 0),
(375, 'Kab. Manggarai Barat', 'Labuan Bajo', 65000, 56000, 0),
(376, 'Kab. Manggarai Barat', 'Komodo, Kuwus, Lembor, Macang Pacar, Sanonggoang', 123000, 0, 0),
(377, 'Kab. Manggarai Timur', 'Borong, Elar, Lamba Leda, Poco Ranaka, Lomba, Sambi Rampas', 123000, 0, 0),
(378, 'Kab. Nagekeo', 'Mbay, Aesesa, Boawae, Mauponggo, Nangaroro, Keo Tengah, Wolo Wae, Aesesa Selatan', 123000, 0, 0),
(379, 'Kab. Rote Ndao', 'Baa', 65000, 56000, 0),
(380, 'Kab. Rote Ndao', 'Lobalain, Pantai Baru, Rote Barat Daya, Rote Barat Laut, Rote Tengah, Rote Timur', 123000, 0, 0),
(381, 'Kab. Sumba Barat Daya', 'Tambolaka', 65000, 56000, 0),
(382, 'Kab. Sumba Barat Daya', 'Kodi, Wewewa Barat, Wewewa Timur, Kodi Bangedo, Kodi Utara, Laura, Wewewa Selatan, Wewewa Utara', 123000, 0, 0),
(383, 'Kab. Lembata', 'Lembata', 65000, 56000, 0),
(384, 'Kab. Lembata', 'Buyasuri, Omesuri, Lebatukan, Ile Ape, Nubatukan, Atadei, Nagawutung, Wulandoni', 123000, 0, 0),
(385, 'Kab. Kupang', 'Kupang Timur, Kupang Tengah, Kupang Barat, Oelamasi', 65000, 56000, 0),
(386, 'Kab. Kupang', 'Takari, Hawu Mehara, Nekemese, Raijua, Sabu Barat, Sabu Liae, Sabu Timur, Semau, Semau Selatan, Sulamu, Taebenu, Fatuleu Tengah, Fatuleu Barat, Amabioefeto Timur, Amarasi Barat, Amarasi Selatan, Amarasi Timur, Amarasi, Amfoang Barat Daya, Amfoang Barat Laut, Amfoang Selatan, Amfoang Utara, Fatuleu', 123000, 0, 0),
(387, 'Kab. Karawang', 'Rengasdengklok, Rawamerta, Majalaya, Talagasari, Ciampel, Jatisari, Tirtamulya, LEMAHABANG WADAS', 9000, 8000, 0),
(388, 'Kab. Karawang', 'Telukjambe Timur, Purwasari, Kotabaru, Karawang Timur, Karawang Barat, Telukjambe Barat, Cikampek, Klari, Karawang', 9000, 8000, 19000),
(389, 'Kab. Karawang', 'Tirtajaya, Kutawaluya, Jayakerta, Cilebar, Cilamaya Wetan, Banyusari, Tegalwaru, Tempuran, Pedes, Pangkalan, Pakisjaya, Batujaya, Cibuaya, Cilamaya Kulon', 12000, 11000, 0),
(390, 'Kota Manado', 'Manado, Wanea, Tuminting, Tikala, Singkil, Sario, Mapanget, Malalayang, Bunaken, Wenang', 42000, 36000, 0),
(391, 'Kab. Bolaang Mongondow', 'Kotamobagu', 58000, 50000, 0),
(392, 'Kab. Bolaang Mongondow', 'Pinolosian, Poigar, Sangtombolang, Dumoga Barat, Dumoga Timur, Dumoga Utara, Nuangan, Pinogaluman, Passi, Modayag, Bintauna, Bolaang, BOLAANG ITANG, BOLAANG UKI, Kaidipang, Kotabunan, Lolayan, Lolak, Posigadan', 73000, 63000, 0),
(393, 'Kab. Kepulauan Sangihe', 'Tahuna', 58000, 50000, 0),
(394, 'Kab. Kepulauan Sangihe', 'Tagulandang Utara, Siau Timur Selatan, Siau Barat Selatan, Nusa Tabukan, Manganitu Selatan, Biaro, Tamako, Tagulandang, Tabukan Tengah, Tabukan Selatan, Tabukan Utara, Siau Barat, Siau Timur, Manganitu, Kendahe, Tatoareng', 73000, 63000, 0),
(395, 'Kab. Minahasa', 'Tondano', 58000, 50000, 0),
(396, 'Kab. Minahasa', 'Tondano Timur, Tondano Selatan, Tondano Barat, Tombulu, Tombariri, Pineleng, Lembean Timur, Langowan Timur, Langowan Selatan, Langowan Barat, Tompaso, Sonder, Remboken, Kombi, Kawangkoan, Kakas, Eris, Tondano Utara', 73000, 63000, 0),
(397, 'Kota Bitung', 'Bitung, Bitung Barat, Bitung Selatan, Bitung Tengah, Bitung Timur, Bitung Utara', 58000, 50000, 0),
(398, 'Kab. Bolaang Mongondow Utara', 'Boroko, Bintauna, Bolaang Itang Barat, Bolaang Itang Timur, Kaidipang, Pinogaluman, Sangkub', 73000, 63000, 0),
(399, 'Kab. Kepulauan Talaud', 'Melonguane, Beo, Essang, Gemeh, Kabaruan, Lirung, Nanusa, Rainis', 73000, 63000, 0),
(400, 'Kab. Minahasa Utara', 'Airmadidi, Dimembe, Kalawat, Kauditan, Kema, Likupang Barat, Likupang Timur, Wori', 73000, 63000, 0),
(401, 'Kab. Minahasa Selatan', 'Amurang, Tompaso Baru, Tombasian, Tenga, Tareran, Sinon Sayang, Ranoyapo, Motoling, Modoinding, Tumpaan', 73000, 63000, 0),
(402, 'Kab. Minahasa Tenggara', 'Ratahan', 58000, 50000, 0),
(403, 'Kab. Minahasa Tenggara', 'Belang, Tombatu, Touluaan, Ratatotok, Pusomaen', 73000, 63000, 0),
(404, 'Kota Tomohon', 'Tomohon, Tomohon Barat, Tomohon Selatan, Tomohon Tengah, Tomohon Timur, Tomohon Utara', 58000, 50000, 0),
(405, 'Kota Madiun', 'Madiun, Kartoharjo, Manguharjo, Taman', 20000, 17000, 0),
(406, 'Kab. Madiun', 'Caruban', 24000, 21000, 0),
(407, 'Kab. Madiun', 'Wonoasri, Sawahan, Saradan, Pilangkenceng, Mejayan, Madiun, Kebonsari, Kare, Jiwan, Gemarang, Geger, Dolopo, Dagangan, Balerejo, Wungu', 29000, 27000, 0),
(408, 'Kab. Magetan', 'Magetan', 24000, 21000, 0),
(409, 'Kab. Magetan', 'Ngariboyo, Kartoharjo, Karas, Barat, Takeran, Sukomoro, Poncol, Plaosan, Parang, Panekan, Maospati, Lembeyan, Kawedanan, Karangrejo, Bendo, Nguntoronadi', 29000, 27000, 0),
(410, 'Kab. Ngawi', 'Ngawi', 24000, 21000, 0),
(411, 'Kab. Ngawi', 'Karanganyar, Widodaren, Sine, Pitu, Paron, Pangkur, Padas, Ngrambe, Mantingan, Kwadungan, Kendal, Kedunggalar, Karangjati, Jogorogo, Geneng, Bringin, Kendungan', 29000, 27000, 0),
(412, 'Kab. Pacitan', 'Pacitan', 24000, 21000, 0),
(413, 'Kab. Pacitan', 'Tegalombo, Sudimoro, Punung, Pringkuku, Ngadirojo, Nawangan, Kebonagung, Donorojo, Bandar, Arjosari, Tulakan', 29000, 27000, 0),
(414, 'Kab. Ponorogo', 'Ponorogo', 24000, 21000, 0),
(415, 'Kab. Ponorogo', 'Sambit, Sampung, Sawoo, Siman, Slahung, Sooko, Sukorejo, Jambon, Pulung, Ngrayun, Ngebel, Babadan, Badegan, Balong, Bungkal, Jenangan, Jetis, Kauman, Mlarak, Pudak', 29000, 27000, 0),
(416, 'Kota Medan', 'Medan Sunggal, Medan Labuhan, Medan Selayang, Medan Deli, Medan Tembung, Medan Tuntungan, Medan Marelan', 27000, 23000, 0),
(417, 'Kota Medan', 'Medan Timur, Medan Polonia, Medan Petisah, Medan Perjuangan, Medan Belawan, Medan Maimun, Medan Amplas, Medan Area, Medan Barat, Medan Baru, Medan Denai, Medan Helvetia, Medan Johor, Medan Kota, Medan', 27000, 23000, 34000),
(418, 'Kab. Asahan', 'Kisaran, Tanjung Balai Asahan', 38000, 33000, 0),
(419, 'Kab. Asahan', 'Kisaran Barat, Sei Kepayang, Aek Kuasan, Simpang Empat, Pulau Rakyat, Meranti, Buntu Pane, Bandar Pulau, Bandar Pasir Mandoge, Air Batu, Air Joman, Kisaran Timur', 48000, 42000, 0),
(420, 'Kab. Tapanuli Tengah', 'Sibolga', 38000, 33000, 0),
(421, 'Kab. Tapanuli Tengah', 'Tapian Nauli, Sosor Gadong, Sorkam Barat, Sitahuis, Sirandorung, Sibabangun, Lumut, Badiri, Adman Dewi, Sorkam, Manduamas, Kolang, Barus, Tukka', 48000, 42000, 0),
(422, 'Kota Sibolga', 'Sibolga Sambas, Sibolga Selatan, Sibolga Utara, Sibolga Kota', 38000, 33000, 0),
(423, 'Kab. Dairi', 'Sidikalang', 38000, 33000, 0),
(424, 'Kab. Dairi', 'Gunung Sitember, Berampu, Siempat Nempu Hulu, Pegagan Hilir, Tiga Lingga, Tanah Pinem, Sumbul, Silima PunggaPungga, Siempat Nempu Hilir, Siempat Nempu, Parbuluan, Lae Parira', 48000, 42000, 0),
(425, 'Kab. Deli Serdang', 'Lubuk Pakam, Tanjung Morawa', 38000, 33000, 0),
(426, 'Kab. Deli Serdang', 'Sunggal, Pantai Labu, Bangun Purba, Beringin, Galang, Gunung Meriah, Namo Rambe, Pagar Marbau, Sinembah Tanjungmuda Hilir, BiruBiru, Deli Tua, Hamparan Perak, Kutalimbaru, Labuhan Deli, Batang Kuis, Pancur Batu, Percut Sei Tuan, Petumbak, Sibolangit, Sinembah Tanjungmuda Hulu', 48000, 42000, 0),
(427, 'Kab. Toba Samosir', 'Balige', 38000, 33000, 0),
(428, 'Kab. Toba Samosir', 'Tampahan, Sigumpar, Siantar Narumonda, Pintu Pohan Meranti, Nassau, Bor Bor, Ajibata, Silaen, Porsea, Lumban Julu, Lagu Boti, Habinsaran, Uluan', 48000, 42000, 0),
(429, 'Kota Binjai', 'Binjai Kota, Binjai, Binjai Barat, Binjai Selatan, Binjai Timur, Binjai Utara', 38000, 33000, 0),
(430, 'Kab. Nias', 'Gunung Sitoli', 38000, 33000, 0),
(431, 'Kab. Nias', 'Afulu', 48000, 42000, 0),
(432, 'Kab. Nias', 'Tuhemberua, Sirombo, Mandrehe, Lotu, Lahewa, Idano Gawo, Hiliduho, Gido, Bawolato, Alasa, Lolofitu Moi', 72000, 0, 0),
(433, 'Kota Padang Sidempuan', 'Padang Sidempuan, Padang Sidempuan Batu Nadua, Padang Sidempuan Hutaimbaru, Padang Sidempuan Selatan, Padang Sidempuan Tenggara, Padang Sidempuan Utara', 38000, 33000, 0),
(434, 'Kab. Simalungun', 'Pematang Raya', 38000, 33000, 0),
(435, 'Kab. Simalungun', 'Silau Kahean, Silimakuta, Tanah Jawa, Tapian Dolok, Ujung Padang, Bandar Huluan, Bandar Masilam, Gunung Malela, Gunung Maligas, Haranggaol Horisanz, Hatonduhan, Jawa Maraja Bah Jambi, Panombeian Pane, Sidamanik, Siantar, Raya Kahean, Bandar, Bosar Maligas, Dolok Silau, Dolok Pardamean, Dolok Panribuan, Dolok Batunanggar, Girsang Sipangan Bolon, Hutabayu Raja, Jorlang Hataran, Panei, Pematang Bandar, Purba, Raya, Pematang Sidamanik', 48000, 42000, 0),
(436, 'Kab. Labuhan Batu', 'Rantau Prapat', 38000, 33000, 0),
(437, 'Kab. Labuhan Batu', 'Bilah Barat, Bilah Hulu, Kualuh Leidong, Kualuh Selatan, Pangkatan, Rantau Selatan, Rantau Utara, Silangkitang, Sungai Kanan, Aek Kuo, Torgamba, Aek Natas, Bilah Hilir, Kampung Rakyat, Kota Pinang, Kualuh Hulu, Kualuh Hilir, Marbau, Na IXX', 48000, 42000, 0),
(438, 'Kab. Labuhan Batu', 'Panai Hulu, Panai Hilir, Panai Tengah', 72000, 0, 0),
(439, 'Kab. Karo', 'Kabanjahe', 38000, 33000, 0),
(440, 'Kab. Karo', 'Tiga Binanga, Simpang Empat, Payung, Munte, Merek, Mardinding, Laubaleng, Kuta Buluh, Juhar, Berastagi, Barusjahe, Tiga Panah', 48000, 42000, 0),
(441, 'Kab. Langkat', 'Stabat, Binjai, Babalan', 38000, 33000, 0),
(442, 'Kab. Langkat', 'Sei Bingai, Kuala, Bohorok, Wampu, Sei Lepan, Sawit Seberang, Salapian, Brandan Barat, Batang Serangan, Tanjung Pura, Secanggang, Pangkalan Susu, Padang Tualang, Hinai, Gebang, Besitang, Selesai', 48000, 42000, 0),
(443, 'Kab. Tapanuli Utara', 'Tarutung, SiborongBorong', 38000, 33000, 0),
(444, 'Kab. Tapanuli Utara', 'Siatas Barita, Purbatua, Muara, Sipahutar, Sipoholon, Parmonangan, Pangaribuan, Pahae Jae, Pahae Julu, Pagaran, Garoga, Adiankoting, Simangumban', 48000, 42000, 0),
(445, 'Kota Tebing Tinggi', 'Tebing Tinggi', 38000, 33000, 0),
(446, 'Kab. Tebing Tinggi', 'Padang Hilir, Padang Hulu, Rambutan', 48000, 42000, 0),
(447, 'Kab. Padang Lawas Utara', 'Gunung Tua', 38000, 33000, 0),
(448, 'Kab. Padang Lawas Utara', 'Batang Onang, Dolok, Dolok Sigompulon, Halongonan, Padang Bolak, Padang Bolak Julu, Poribi, Simangambat', 48000, 42000, 0),
(449, 'Kab. Batubara', 'Limapuluh', 38000, 33000, 0);
INSERT INTO `tarif` (`tarif_id`, `kota`, `kecamatan`, `reg`, `oke`, `yes`) VALUES
(450, 'Kab. Batubara', 'Medang Deras, Air Putih, Talawi, Tanjung Tiram, Sei Balai, Sei Suka', 48000, 42000, 0),
(451, 'Kab. Humbang Hasudutan', 'Dolok Sanggul', 38000, 33000, 0),
(452, 'Kab. Humbang Hasudutan', 'Sijama Polang, Pollung, Parlilitan, Paranginan, Pakkat, Onan Ganjang, Lintong Nihuta, Baktiraja, Tarabintang', 48000, 42000, 0),
(453, 'Kab. Mandailing Natal', 'Panyabungan', 38000, 33000, 0),
(454, 'Kab. Mandailing Natal', 'Tambangan, Siabu, Panyabungan Utara, Panyabungan Timur, Panyabungan Selatan, Panyabungan Kota, Panyabungan Barat, Natal, Muara Sipongi, Muara Batang Gadis, Lingga Bayu, Lembah Sorik Merapi, Kotanopan, Bukit Malintang, Batang Natal, Batahan, Ulu Pungkut', 48000, 42000, 0),
(455, 'Kab. Nias Selatan', 'Teluk Dalam', 38000, 33000, 0),
(456, 'Kab. Nias Selatan', 'Amandraya, Gomo, Hibala, Lahusa, Lolomatua, PulauPulau Batu', 72000, 0, 0),
(457, 'Kab. Padang Lawas', 'Sibuhuan', 38000, 33000, 0),
(458, 'Kab. Padang Lawas', 'Sosopan, Sosa, Lubuk Barumun, Huta Raja Tinggi, Huristak, Batang Bulu Sutam, Barumun Tengah, Barumun, Ulu Barumun', 48000, 42000, 0),
(459, 'Kab. Pakpak Barat', 'Salak', 38000, 33000, 0),
(460, 'Kab. Pakpak Barat', 'Kerajaan, Sitellu Tai Urang Jehe, Sitellu Tai Urang Julu, Pergettenggetteng Sengkut, Pagindar, Siempat Rube, Tinada', 48000, 42000, 0),
(461, 'Kab. Samosir', 'Pangururan', 38000, 33000, 0),
(462, 'Kab. Samosir', 'Harian, Nainggolan, Onan Runggu, Palipi, Ronggur Nihuta, Sianjur Mula Mula, Simanindo, Sitiotio', 48000, 42000, 0),
(463, 'Kab. Serdang Bedagai', 'Sei Rampah', 38000, 33000, 0),
(464, 'Kab. Serdang Bedagai', 'Tebingtinggi, Tanjung Beringin, Sipispis, Perbaungan, Pantai Cermin, Kotarih, Dolok Merawan, Dolok Masihul, Bandar Khalipah, Teluk Mengkudu', 48000, 42000, 0),
(465, 'Kab. Tapanuli Selatan', 'Sipirok', 38000, 33000, 0),
(466, 'Kab. Tapanuli Selatan', 'Marancar, Padang Bolak, Padang Bolak Julu, Padang Sidempuan Barat, Padang Sidempuan Timur, Portibi, Saipar Dolok Hole, Sayur Matinggi, Siais, Simangambat, Sosa, Sosopan, Lubuk Barumun, Huta Raja Tinggi, Aek Bilah, Arse, Barumun, Barumun Tengah, Batang Angkola, Batang Lubu Sutam, Batang Onang, Batang Toru, Dolok, Dolok Sigompulon, Halongonan, Huristak, Ulu Barumun', 48000, 42000, 0),
(467, 'Kota Tanjung Balai', 'Tanjung Balai, Datuk Bandar, Sei Tualang Raso, Tanjung Balai Selatan, Tanjung Balai Utara, Teluk Nibung', 38000, 33000, 0),
(468, 'Kota Pematangsiantar', 'Pematang Siantar, Siantar Barat, Siantar Marihat, Siantar Martoba, Siantar Selatan, Siantar Timur, Siantar Utara', 38000, 33000, 0),
(469, 'Kota Magelang', 'Magelang, Magelang Selatan, Magelang Tengah, Magelang Utara', 18000, 16000, 25000),
(470, 'Kab. Kebumen', 'Kebumen', 22000, 19000, 0),
(471, 'Kab. Kebumen', 'Puring, Sadang, Sruweng, Gombong, Ayah, Buayan, Rowokele, Bonorowo, Karangsambung, Padureso, Poncowarno, Prembun, Petanahan, Adimulyo, Aliyan, Ambal, Bulupesantren, Karanganyar, Karanggayam, Klirong, Kutowinangun, Kuwarasan, Mirit, Pejagoan, Sempor', 23000, 22000, 0),
(472, 'Kab. Wonosobo', 'Wonosobo', 22000, 19000, 0),
(473, 'Kab. Wonosobo', 'Kalibawang, Watumalang, Wadaslintang, Selomerto, Sapuran, Mojotengah, Leksono, Kertek, Kepil, Kejajar, Kaliwiro, Kalikajar, Garung, Sukoharjo', 23000, 22000, 0),
(474, 'Kab. Purworejo', 'Purworejo, Purwodadi', 22000, 19000, 0),
(475, 'Kab. Purworejo', 'Banyuurip, Grabag, Bruno, Butuh, Pituruh, Kemiri, Kutoarjo, Bagelen, Ngombol, Loano, Kaligesing, Gebang, Bener, Bayan', 23000, 22000, 0),
(476, 'Kab. Temanggung', 'Temanggung', 22000, 19000, 0),
(477, 'Kab. Temanggung', 'Tembarak, Tretep, Bejen, Tlogomulyo, Kledung, Wonoboyo, Gemawang, Bansari, Pringsurat, Parakan, Bulu, Candiroto, Jumo, Kaloran, Kandangan, Kedu, Kranggan, Ngadirejo, Selopampang', 23000, 22000, 0),
(478, 'Kab. Magelang', 'Mungkid', 22000, 19000, 0),
(479, 'Kab. Magelang', 'Tegalrejo, Tempuran, WINDUSARI, Srumbung, Dukun, Sawangan, Muntilan, Ngluwar, Secang, Salaman, Pakis, Salam, Bandongan, Candimulyo, Grabag, Kajoran, Kaliangkrik, MERTOYUDAN, Ngablak, Borobudur', 23000, 22000, 0),
(480, 'Kab. Mojokerto', 'Mojoanyar, Trowulan, Trawas, Sooko, Puri, Pungging, Pacet, Ngoro, Mojosari, Kutorejo, Kemlagi, Jetis, Jatirejo, Gondang, Gedeg, Dlanggu, Dawarblandong, Bangsal', 20000, 17000, 0),
(481, 'Kab. Mojokerto', 'Mojokerto', 20000, 17000, 27000),
(482, 'Kab. Sidoarjo', 'Porong, Krembung, Jabon, Tanggulangin, Tulangan, Wonoayu', 17000, 15000, 0),
(483, 'Kab. Sidoarjo', 'Waru, Sukodono, Krian, Sedati, Taman, Gedangan, Candi, Buduran, Sidoarjo', 17000, 15000, 25000),
(484, 'Kab. Sidoarjo', 'Prambon, Tarik, Balongbendo', 20000, 17000, 0),
(485, 'Kota Mojokerto', 'Magersari, Parajurit Kulon', 20000, 17000, 27000),
(486, 'Kota Malang', 'Malang, Blimbing, Kedungkandang, Klojen, Lowokwaru, Sukun', 20000, 17000, 27000),
(487, 'Kab. Blitar', 'Blitar, Wlingi', 24000, 21000, 0),
(488, 'Kab. Blitar', 'Selorejo, Srengat, Sutojayan, Talun, Udanawu, Wates, Wonodadi, Wonotirto, Sanankulon, Ponggok, Panggungrejo, Bakung, Binangun, Doko, Gandusari, Garum, Kademangan, Kanigoro, Kesamben, Nglegok, Selopuro', 29000, 27000, 0),
(489, 'Kota Blitar', 'Kepanjenkidul, Sananwetan, Sukorejo', 29000, 27000, 0),
(490, 'Kota Batu', 'Batu', 24000, 21000, 0),
(491, 'Kota Batu', 'Bumiaji, Junrejo', 29000, 27000, 0),
(492, 'Kab. Malang', 'Kepanjen', 24000, 21000, 0),
(493, 'Kab. Malang', 'Poncokusumo, Sumberpucung, Sumbermanjing Wetan, Tajinan, Tirtoyudo, Turen, Tumpang, Wagir, Wajak, Wonosari, Ngantang, Pujon, Kasembon, Lawang, Pakisaji, Pakis, Ampelgading, Bantur, Bululawang, Dampit, Donomulyo, Gedangan, Gondanglegi, Jabung, Kalipare, Karangploso, Kromengan, Ngajum, Pagak, Pagelaran', 29000, 27000, 0),
(494, 'Kab. Malang', 'Dau, Singosari', 29000, 27000, 27000),
(495, 'Kab. Nabire', 'Nabire', 98000, 84000, 0),
(496, 'Kab. Nabire', 'Yaur, Yaro, Wapoga, Wanggar, Uwapa, Teluk Umar, Teluk Kimi, Siriwo, Obano, Napan, Nabire barat, Menou, Mapia, Makimi, Dipa', 157000, 134000, 0),
(497, 'Kab. Dogiyai', 'Kamu', 125000, 107000, 0),
(498, 'Kab. Dogiyai', 'Kamu Selatan, Kamu Timur, Kamu Utara, Sukikai, Sukikai Selatan', 157000, 134000, 0),
(499, 'Kab. Paniai', 'Enarotali', 125000, 107000, 0),
(500, 'Kab. Paniai', 'Agisiga, Aradide, Biandoga, Bibida, Bogoboida, Homeyo, Paniai Barat, Paniai Barat', 157000, 134000, 0),
(501, 'Kab. Puncak Jaya', 'Mulia', 125000, 107000, 0),
(502, 'Kab. Puncak Jaya', 'Beoga, Fawi, Ilaga, Ilu, Sinak', 157000, 134000, 0),
(503, 'Kab. Mappi', 'Kepi', 125000, 107000, 0),
(504, 'Kab. Mappi', 'Assue, Citak Mitak, Edera, Haju, Nambioman Bapai, Obaa', 157000, 134000, 0),
(505, 'Kab. Intan Jaya', 'Sugapa', 125000, 107000, 0),
(506, 'Kab. Intan Jaya', 'Agisiga, Biandoga, Hitadipa, Homeyo, Intan Jaya, Wandai', 157000, 134000, 0),
(507, 'Kab. Deiyai', 'Tigi', 125000, 107000, 0),
(508, 'Kab. Deiyai', 'Bowobado, Kapiraya, Tigi Timur, Tigi Barat', 157000, 134000, 0),
(509, 'Kab. Probolinggo', 'Probolinggo', 20000, 17000, 27000),
(510, 'Kab. Probolinggo', 'Paiton, Kraksaan', 24000, 21000, 0),
(511, 'Kab. Probolinggo', 'Pajarakan, Pakuniran, Sukapura, Sumber, Sumberasih, Tegalsiwalan, Tiris, Tongas, Wonomerto, Maron, Lumbang, Banyuanyar, Bantaran, Besuk, Dringu, Gending, Kotaanyar, Krejengan, Krucil, Kuripan, Leces, Gading', 29000, 27000, 0),
(512, 'Kota Probolinggo', 'Kademangan, Mayangan, Wonoasih, Kedopok, Kanigaran', 24000, 21000, 27000),
(513, 'Kab. Lumajang', 'Lumajang', 24000, 21000, 0),
(514, 'Kab. Lumajang', 'Senduro, Sukodono, Tekung, Tempursari, Tempeh, Yosowilangun, Padang, Pasrujambe, Rowokangkung, Ranuyoso, Randuagung, Candipuro, Gucialit, Jatiroto, Klakah, Kedungjajang, Kunir, Pasirian, Pronojiwo, Sumbersoko', 29000, 27000, 0),
(515, 'Kab Situbondo', 'Situbondo', 24000, 21000, 0),
(516, 'Kab Situbondo', 'Sumber Malang, Suboh, Panarukan, Mlandingan, Mangaran, Kendit, Kapongan, Jatibanteng, Jangkar, Bungatan, Besuki, Banyuglugur, Banyuputih, Asembagus, Arjasa, Panji', 29000, 27000, 0),
(517, 'Kota Padang', 'Padang, Padang Utara, Padang Timur, Padang Selatan, Padang Barat, Nanggalo, Lubuk Kilangan, Lubuk Begalung, Kuranji, Koto Tangah, Bungus Teluk Kabung, Pauh', 25000, 22000, 30000),
(518, 'Kab. Tanah Datar', 'Batu Sangkar', 34000, 29000, 0),
(519, 'Kab. Tanah Datar', 'Sepuluh Koto, Padang Ganting, Lintau Buo Utara, Lima Kaum, Batipuh Selatan, Tanjung Emas, Sungayang, Sungai Tarab, Salimpaung, Rambatan, Pariangan, Lintau Buo, Batipuh, Tanjung Baru', 43000, 37000, 0),
(520, 'Kota Bukit Tinggi', 'Bukit Tinggi, Aur Birugo Tigo Baleh, Mandiangin Koto Selayan, Guguk Panjang', 34000, 29000, 0),
(521, 'Kab. Pasaman', 'Lubuk Sikaping', 34000, 29000, 0),
(522, 'Kab. Pasaman', 'Bonjol, Panti, RAO MAPAT TUNGGUL, III Nagari, Mapat Tunggul Selatan, II Koto, Mapat Tunggul', 43000, 37000, 0),
(523, 'Kab. Pesisir Selatan', 'Painan', 34000, 29000, 0),
(524, 'Kab. Pesisir Selatan', 'Sutera, Lunang Silaut, Linggo Sari Baganti, Bayang Utara, Basa IV Balai Tapan, Ranah Pesisir, Pancung Soal, Lengayang, Koto XI Tarusan, Bayang, Batang Kapas, IV Jurai', 43000, 37000, 0),
(525, 'Kab. Padang Pariaman', 'Pariaman, Lubuk Alung', 34000, 29000, 0),
(526, 'Kab. Padang Pariaman', 'VI Lingkung, V Koto Timur, IV Koto Aur Malintang, Ulakan Tapakis, Sintuk Toboh Gadang, Patamuan, Padang Sago, Batang Gasan, VII Koto Sungai Sarik, Sungai Geringging, Sungai Limau, Nan Sabaris, V Koto Kp Dalam, II.X.XI.VI Lingkung, Batang Anai, 2 X 11 Kayu Tanam', 43000, 37000, 0),
(527, 'Kota Pariaman', 'Pariaman Selatan, Pariaman Tengah, Pariaman Utara', 34000, 29000, 0),
(528, 'Kota Payakumbuh', 'Payakumbuh, Payakumbuh Barat, Payakumbuh Timur, Payakumbuh Utara', 34000, 29000, 0),
(529, 'Kota Sawahlunto', 'Sawahlunto, Barangin, Lembah Segar, Silungkang, Talawi', 34000, 29000, 0),
(530, 'Kota Solok', 'Solok, Lubuk Sikarah, Tanjung Harapan', 34000, 29000, 0),
(531, 'Kota Padang Panjang', 'Padang Panjang, Padang Panjang Barat, Padang Panjang Timur', 34000, 29000, 0),
(532, 'Kab. Dharmasraya', 'Pulau Punjung', 34000, 29000, 0),
(533, 'Kab. Dharmasraya', 'Koto Baru, Sitiung, Sungai Rumbai', 43000, 37000, 0),
(534, 'Kab. Lima Puluh Kota', 'Sarilamak', 34000, 29000, 0),
(535, 'Kab. Lima Puluh Kota', 'Suliki Gunung Mas, Situjuh Lima Nagari, Payakumbuh, Pangkalan Koto Baru, Mungka, Lareh Sago Halaban, Kapur IX, Harau, Gunung Mas, Guguk, Bukit Barisan, Akabiluru, Luhak', 43000, 37000, 0),
(536, 'Kab. Kepulauan Mentawai', 'Tuapejat, Pagai Selatan, Pagai Utara', 34000, 29000, 0),
(537, 'Kab. Kepulauan Mentawai', 'Siberut Selatan, Siberut Utara, Sipora', 43000, 37000, 0),
(538, 'Kab. Pasaman Barat', 'Simpang Empat', 34000, 29000, 0),
(539, 'Kab. Pasaman Barat', 'Sungai Beremas, Sungai Aur, Ranah Pesisir, Ranah Batahan, Ranah Balingka, Pasaman, Luhak Nan Duo, Lembah Melintang, Kinali, Gunung Tuleh, Talamau', 43000, 37000, 0),
(540, 'Kab. Solok', 'Arosuka', 34000, 29000, 0),
(541, 'Kab. Solok', 'Payung Sekaki, Pantai Cermin, Lembang Jaya, Lembah Gumanti, Kubung, Junjung Sirih, Hiliran Gumanti, Gunung Talang, Danau Kembar, Bukit Sundi, X Koto Singkarak, X Koto Diatas, IX Koto Sungai Lasi, Tigo Lurah', 43000, 37000, 0),
(542, 'Kab. Solok Selatan', 'Padang Aro', 34000, 29000, 0),
(543, 'Kab. Solok Selatan', 'Koto Parik Gadang Diateh, Sangir, Sangir Batanghari, Sangir Jujuan, Sungai Pagu', 43000, 37000, 0),
(544, 'Kab. Sijunjung', 'Muaro Sijunjung', 34000, 29000, 0),
(545, 'Kab. Sijunjung', 'Koto Tujuh, IV Nagari, Kamang Baru, Kupitan, Lubuk Tarok, Sumpur Kudus, Tanjung Gadang', 43000, 37000, 0),
(546, 'Kab. Agam', 'Lubuk Basung', 34000, 29000, 0),
(547, 'Kab. Agam', 'Kamang Magek, Ampek Nagari, Tilatang Kamang, Palembayan, Matur, Candung, IV Koto, Baso, Banuhampu, IV Angkat Canduang, Tanjung Raya, Tanjung Mutiara, Palupuh, Sungai Puar', 43000, 37000, 0),
(548, 'Kab. Pasuruan', 'Pandaan', 20000, 17000, 0),
(549, 'Kab. Pasuruan', 'Purwodadi, Purwosari, Puspo, Rejoso, Rembang, Sukorejo, Tosari, Tutur, Winongan, Wonorejo, Kedawung, Prigen, Pohjentrek, Bangil, Beji, Gempol, Gondang Wetan, Grati, Kejayan, Kraton, Lekok, Lumbang, Nguling, Pasrepan, Nongko Jajar', 29000, 27000, 0),
(550, 'Kota Pasuruan', 'Pasuruan, Bugulkidul, Gadingrejo, Purworejo', 24000, 21000, 0),
(551, 'Kota Pangkal Pinang', 'Pangkal Pinang, Rangkui, Bukit Intan, Pangkal Balam, Gerunggang', 20000, 17000, 29000),
(552, 'Kab. Bangka', 'Belinyu', 32000, 28000, 0),
(553, 'Kab. Bangka', 'Sungai liat', 32000, 28000, 29000),
(554, 'Kab. Bangka', 'Riau Silip, Bakam, Pemali, Mendo Barat, Merawang, Puding Besar', 40000, 35000, 0),
(555, 'Kab. Bangka Barat', 'Kelapa, Mentok, Jebus', 32000, 28000, 0),
(556, 'Kab. Bangka Barat', 'Tempilang, Simpang Teritip', 40000, 35000, 0),
(557, 'Kab. Bangka Tengah', 'Koba', 32000, 28000, 0),
(558, 'Kab. Bangka Tengah', 'Sungai Selan, Simpang Katis', 40000, 35000, 0),
(559, 'Kab. Bangka Tengah', 'Pangkalan Baru', 40000, 35000, 29000),
(560, 'Kab. Bangka Selatan', 'Toboali', 32000, 28000, 0),
(561, 'Kab. Bangka Selatan', 'Lepar Pongok, Payung, Air Gegas, Simpang Rima', 40000, 35000, 0),
(562, 'Kota Pekanbaru', 'Pekanbaru, Tenayan Raya, Rumbai Pesisir, Tampan, Bukit Raya, Sukajadi, Senapelan, Sail, Marpoyan Damai, Lima Puluh, Payung', 25000, 22000, 30000),
(563, 'Kota Pekanbaru', 'Rumbai', 37000, 32000, 30000),
(564, 'Kota Dumai', 'Dumai, Bukit Kapur, Dumai Barat, Dumai Timur, Medang Kampai, Sungai Sembilan', 37000, 32000, 0),
(565, 'Kab. Kampar', 'Bangkinang', 37000, 32000, 0),
(566, 'Kab. Kampar', 'Tapung Hulu, Tapung Hilir, Tapung, Tambang, Salo, Rumbio Jaya, Perhentian Raja, Kampar Utara, Kampar Timur, Kampar Kiri Hulu, Kampar Kiri Hilir, Gunung Sahilan, Bangkinang Seberang, Bangkinang Barat, Kampar Kiri, Siak Hulu, Kampar', 47000, 40000, 0),
(567, 'Kab. Kampar', 'XIII Koto Kampar', 71000, 0, 0),
(568, 'Kab. Bengkalis', 'Bengkalis, Duri Mandau', 37000, 32000, 0),
(569, 'Kab. Bengkalis', 'Bukit Batu, Mandau, Bantan, Pinggir, Siak Kecil', 47000, 40000, 0),
(570, 'Kab. Bengkalis', 'Rupat, Rupat Utara', 71000, 0, 0),
(571, 'Kab. Indragiri Hulu', 'Rengat', 37000, 32000, 0),
(572, 'Kab. Indragiri Hulu', 'Pasir Penyu, Peranap, Seberida, Lirik, Batang Cenaku, Batang Gansal, Kelayang, Rengat Barat', 47000, 40000, 0),
(573, 'Kab. Indragiri Hilir', 'Tembilahan', 37000, 32000, 0),
(574, 'Kab. Indragiri Hilir', 'Teluk Balengkong, Pulau Burung, Tembilahan Hulu', 47000, 40000, 0),
(575, 'Kab. Indragiri Hilir', 'Kateman, Batang Tuaka, Enok, Pelangiran, Kemuning, Gaung, Tempuling, Tanah Merah, Gaung Anak Serka, Mandah, Kuala Indragiri, Keritang, Reteh', 71000, 0, 0),
(576, 'Kab. Rokan Hilir', 'Bagan Siapiapi', 37000, 32000, 0),
(577, 'Kab. Rokan Hilir', 'Batu Hampar, Bangko Pusako, Bangko, Bagan Sinembah, Tanah Putih, Tanah Putih Tanjung Melawan', 47000, 40000, 0),
(578, 'Kab. Rokan Hilir', 'Rimba Melintang, Kubu, Pasir Limau Kapas, Pujud, Rantau Kopar, Simpang Kanan, Sinaboi', 71000, 0, 0),
(579, 'Kab. Kuantan Sengingi', 'Teluk Kuantan', 37000, 32000, 0),
(580, 'Kab. Kuantan Sengingi', 'Singingi, Pangean, Logas Tanah Darat, Kuantan Tengah, Inuman, Hulu Kuantan, Gunung Toar, Cerenti, Benai, Kuantan Mudik, Kuantan Hilir, Singingi Hilir', 47000, 40000, 0),
(581, 'Kab. Palalawan', 'Pangkalan Kerinci', 37000, 32000, 0),
(582, 'Kab. Palalawan', 'Ukui, Teluk Meranti, Pelalawan, Pangkalan Lesung, Pangkalan Kuras, Kuala Kampar, Kerumutan, Bunut, Sorek', 47000, 40000, 0),
(583, 'Kab. Palalawan', 'Langgam', 71000, 0, 0),
(584, 'Kab. Rokan Hulu', 'Pasir Pangaraian, Ujung Batu', 37000, 32000, 0),
(585, 'Kab. Rokan Hulu', 'Kabun, Tembusai Utara, Tembusai, Tandun, Rokan IV Koto, Rambah Samo, Bangun Purba, Rambah, Kepenuhan, Rambah Hilir', 47000, 40000, 0),
(586, 'Kab. Rokan Hulu', 'Kuntodarussalam', 71000, 0, 0),
(587, 'Kab. Siak', 'Siak Indrapura, Minas', 37000, 32000, 0),
(588, 'Kab. Siak', 'Sungai Mandau, Sungai Apit, Siak, Lubuk Dalam, Koto Gasip, Kerinci Kanan, Kandis, Dayun, Bunga Raya, Tualang', 47000, 40000, 0),
(589, 'Kab. Meranti', 'Meranti', 37000, 32000, 0),
(590, 'Kab. Meranti', 'Selat Panjang, Tebing Tinggi, Tebing Tinggi Barat', 47000, 40000, 0),
(591, 'Kab. Meranti', 'Merbau, Rangsang, Rangsang Barat', 71000, 0, 0),
(592, 'Kota Palangkaraya', 'Bukit Batu, Sebangau', 30000, 26000, 0),
(593, 'Kota Palangkaraya', 'Palangkaraya, Jekan Raya, Pahandut', 30000, 26000, 35000),
(594, 'Kota Palangkaraya', 'Rakumpit', 93000, 0, 0),
(595, 'Kab. Katingan', 'Kasongan', 49000, 42000, 0),
(596, 'Kab. Katingan', 'Mendawai, Pulau Malan, Katingan Tengah, Katingan Hilir', 62000, 53000, 0),
(597, 'Kab. Katingan', 'Katingan Kuala, Marikit, Katingan Hulu, Sanaman Mantikei, Tasik Payawan, Tewang Sangalang Garing, Kamipang', 93000, 0, 0),
(598, 'Kab. Kapuas', 'Kuala Kapuas', 49000, 42000, 0),
(599, 'Kab. Kapuas', 'Kapuas Hilir, Kapuas Hulu, Timpah, Pulau Petak, Mantangai, Kapuas Kuala, Kapuas Timur, Kapuas Tengah, Kapuas Murung, Kapuas Barat, Basarang, Selat', 62000, 53000, 0),
(600, 'Kab. Gunung Mas', 'Kuala Kurun', 49000, 42000, 0),
(601, 'Kab. Gunung Mas', 'Sepang', 62000, 53000, 0),
(602, 'Kab. Gunung Mas', 'Kahayan Hulu Utara, Rungan, Tewah, Munuhing', 93000, 0, 0),
(603, 'Kab. Seruyan', 'Kuala Pembuang', 49000, 42000, 0),
(604, 'Kab. Seruyan', 'Danau Sembuluh, Seruyan Hilir', 62000, 53000, 0),
(605, 'Kab. Seruyan', 'Hanau, Seruyan Hulu, Seruyan Tengah', 93000, 0, 0),
(606, 'Kab. Kotawaringin Barat', 'Pangkalan Bun', 49000, 42000, 0),
(607, 'Kab. Kotawaringin Barat', 'Arut Utara, Kota Waringin Lama, Kumai, Arut Selatan, Pangkalan Lada, Pangkalan Banteng', 62000, 53000, 0),
(608, 'Kab. Kotawaringin Timur', 'Sampit', 49000, 42000, 0),
(609, 'Kab. Kotawaringin Timur', 'Baamang, Antang Kalang, Pulau Hanaut, Parenggean, Mentaya Hilir Utara, Mentaya Hulu, Mentaya Hilir Selatan, Kota Besi, Cempaga, Mentawa Baru', 62000, 53000, 0),
(610, 'Kab. Lamandau', 'Nanga Bulik', 49000, 42000, 0),
(611, 'Kab. Lamandau', 'Bulik, Lamandau', 62000, 53000, 0),
(612, 'Kab. Lamandau', 'Delang', 93000, 0, 0),
(613, 'Kab. Pulang Pisau', 'Pulang Pisau', 49000, 42000, 0),
(614, 'Kab. Pulang Pisau', 'Banamatingang, Kahayan Hilir, Kahayan Tengah, Pandih Batu', 62000, 53000, 0),
(615, 'Kab. Pulang Pisau', 'Kahayan Kuala, Maliku', 93000, 0, 0),
(616, 'Kab. Sukamara', 'Sukamara', 49000, 42000, 0),
(617, 'Kab. Sukamara', 'Balai Riam, Jelai', 62000, 53000, 0),
(618, 'Kota Palembang', 'Plaju, Sematang Borang', 20000, 17000, 0),
(619, 'Kota Palembang', 'Palembang, Seberang Ulu II, Seberang Ulu I, Sako, Kertapati, Kemuning, Kalidoni, Ilir Timur II, Ilir Timur I, Ilir Barat II, Ilir Barat I, Gandus, Bukit Kecil, AlangAlang Lebar, Sukarame', 20000, 17000, 29000),
(620, 'Kab. Musi Rawas', 'Muara Beliti Baru', 31000, 27000, 0),
(621, 'Kab. Musi Rawas', 'Ulu Rawas, Tugumulyo, Selangit, Rawas Ulu, Purwodadi, Nibung, Muara Rupit, Muara Lakitan, Muara Kelingi, Muara Beliti, Megang Sakti, Karang Jaya, Karang Dapo, Jayaloka, BTS Ulu, BKL Ulu Terawas, Rawas Ilir', 39000, 34000, 0),
(622, 'Kab. Ogan Komering Ulu', 'Baturaja', 31000, 27000, 0),
(623, 'Kab. Ogan Komering Ulu', 'Semidang Aji, Lubuk Batang, Lengkiti, Baturaja Timur, Baturaja Barat, Sosoh Buay Rayap, Pengandonan, Peninjauan, Ulu Ogan', 39000, 34000, 0),
(624, 'Kab. Ogan Komering Ilir', 'Kota Kayu Agung', 31000, 27000, 0),
(625, 'Kab. Ogan Komering Ilir', 'Lempuing, Jejawi, Cengal, Air Sugihan, Tulung Selapan, Tanjung Lubuk, Sirah Pulau Padang, Pedamaran, Pampangan, Mesuji, Pematang Panggang', 39000, 34000, 0),
(626, 'Kab. Lahat', 'Lahat', 31000, 27000, 0),
(627, 'Kab. Lahat', 'Mulak Ulu, Kota Agung, Kikim Timur, Kikim Tengah, Kikim Selatan, Kikim Barat, Jarai, Tanjung Sakti, Pulau Pinang, Merapi, Pajar Bulan', 39000, 34000, 0),
(628, 'Kab. Muara Enim', 'Muara Enim, Lawang Kidul', 31000, 27000, 0),
(629, 'Kab. Muara Enim', 'Semende Darat Tengah, Semende Darat Ulu, Sungai Rotan, Talang Ubi, Tanah Abang, Ujan Mas, Abab (Penukal Abab), Muara Belikan, Semende Darat Laut, Penukal Utara, Penukal Abab, Gunung Megang, Tanjung Agung, Gelumbang, Rembang Dangku, Rembang, Benakat, Lembak, Lubai, Kelekar', 39000, 34000, 0),
(630, 'Kota Pagar Alam', 'Pagar Alam, Pagar Alam Utara, Pagar Alam Selatan, Dempo Selatan, Dempo Tengah, Dempo Utara', 31000, 27000, 0),
(631, 'Kota Prabumulih', 'Prabumulih, Cambai, Prabumulih Barat, Rambang Kapak Tengah, Prabumulih Timur', 31000, 27000, 0),
(632, 'Kab. Musi Banyuasin', 'Sekayu, Sungai Lilin', 31000, 27000, 0),
(633, 'Kab. Musi Banyuasin', 'Babat Toman, Bayung Lencir, Batang Harileko, Keluang, Lais, Sanga Desa, Sungai Keruh', 39000, 34000, 0),
(634, 'Kab. Banyuasin', 'Pangkalan Balai', 31000, 27000, 0),
(635, 'Kab. Banyuasin', 'Talang Kelapa, Rantau Bayur, Rambutan, Pulau Rimau, Muara Telang, Makarti Jaya, Betung, Banyuasin III, Banyuasin II, Banyuasin I, Muara Padang', 39000, 34000, 0),
(636, 'Kab. Empat Lawang', 'Tebing Tinggi', 31000, 27000, 0),
(637, 'Kab. Empat Lawang', 'Lintang Kanan, Muara Pinang, Pasemah Air Keruh, Pendopo, Talang Padang, Ulu Musi', 39000, 34000, 0),
(638, 'Kab. Ogan Ilir', 'Indralaya', 31000, 27000, 0),
(639, 'Kab. Ogan Ilir', 'Muara Kuang, Pemulutan, Rantau Alai, Tanjung Batu, Tanjung Raja', 39000, 34000, 0),
(640, 'Kab. Ogan Komering Ulu Timur', 'Martapura', 31000, 27000, 0),
(641, 'Kab. Ogan Komering Ulu Timur', 'Semendawa Suku III, Madang Suku II, Madang Suku I, Cempaka, Buay Pemuka Peliung, Buay Madang, Belitang III, Belitang II, Belitang, MADANG SUKU III', 39000, 34000, 0),
(642, 'Kab. Ogan Komering Ulu Selatan', 'Muaradua', 31000, 27000, 0),
(643, 'Kab. Ogan Komering Ulu Selatan', 'Pulau Beringin, Muaradua Kisam, Mekakau Ilir, Kisam Tinggi, Buay Sandang Aji, Buay Runjung, Buay Pemaca, Banding Agung, Simpang', 39000, 34000, 0),
(644, 'Kota Lubuk Linggau', 'Lubuk Linggau, Lubuklinggau Barat I, Lubuklinggau Barat II, Lubuklinggau Selatan I, Lubuklinggau Selatan II, Lubuklinggau Timur I, Lubuklinggau Timur II, Lubuklinggau Utara I, Lubuklinggau Utara II', 31000, 27000, 0),
(645, 'Kota Palu', 'Palu, Palu Barat, Palu Selatan, Palu Timur, Palu Utara', 40000, 34000, 0),
(646, 'Kab. Banggai', 'Luwuk', 58000, 50000, 0),
(647, 'Kab. Banggai', 'Balantak, Batui, Bunta, Kintom, Lamala, Pagimana, Boalemo, Toili', 73000, 63000, 0),
(648, 'Kab. Poso', 'Poso Kota', 58000, 50000, 0),
(649, 'Kab. Poso', 'Lage, Lore Utara, Lore Selatan, Pamona Selatan, Pamona Utara, Poso Pesisir, Lore Tengah, Pamona Timur', 73000, 63000, 0),
(650, 'Kab. ToliToli', 'ToliToli', 58000, 50000, 0),
(651, 'Kab. ToliToli', 'Lampasio, Basidondo, Baolan, Utara Toli Toli, Galang, Dondo, Dampal Selatan, Dampal Utara, Ogo Deide', 73000, 63000, 0),
(652, 'Kab. Banggai Kepulauan', 'Banggai', 58000, 50000, 0),
(653, 'Kab. Banggai Kepulauan', 'Bokan Kepulauan, Buko, Bulagi, Bulagi Selatan, Liang, Lo Bangkurung, Tinangkung, Totikum', 73000, 63000, 0),
(654, 'Kab. Buol', 'Buol', 58000, 50000, 0),
(655, 'Kab. Buol', 'Paleleh, Momunu, Lipunoto, Gadung, Bunobogu, Bukal, Bokat, Biau, Tiolan', 73000, 63000, 0),
(656, 'Kab. Donggala', 'Banawa', 40000, 34000, 0),
(657, 'Kab. Donggala', 'Sojol, Sirenja, Sindue, Sigi Biromaru, Riopakawa, Pipikoro, Palolo, Marawola, Kulawi, Dolo, Damsol, Balaesang, Tawaeli', 73000, 63000, 0),
(658, 'Kab. Morowali', 'Bungku', 58000, 50000, 0),
(659, 'Kab. Morowali', 'Soyo Jaya, Petasia, Mori Atas, Menui Kepulauan, Mamosalato, Lembo, Bumi Raya, Bahodopi, Bungku Utara, Bungku Tengah, Bungku Selatan, Bungku Barat, Wita Ponda', 73000, 63000, 0),
(660, 'Kab. Parigi Moutong', 'Parigi', 58000, 50000, 0),
(661, 'Kab. Parigi Moutong', 'Tomini, Tinombo Selatan, Tinombo, Sausu, Moutong, Kasimbar, Bolano Lambunu, Ampibabo, Torue', 73000, 63000, 0),
(662, 'Kab. Tojo UnaUna', 'Ampana Kota', 58000, 50000, 0),
(663, 'Kab. Tojo UnaUna', 'Ampana Tete, Togean, Tojo, Tojo Barat, Ulu Bongka, UnaUna, Walea Kepulauan', 73000, 63000, 0),
(664, 'Kota Pontianak', 'Pontianak Timur/ Jungkat', 27000, 23000, 0),
(665, 'Kota Pontianak', 'Pontianak, Pontianak Barat, Pontianak Kota, Pontianak Selatan, Pontianak Tenggara, Pontianak Utara', 27000, 23000, 30000),
(666, 'Kab. Ketapang', 'Ketapang', 42000, 36000, 0),
(667, 'Kab. Ketapang', 'Air Upas, Delta Pawan, Hulu Sungai, Matan Hilir Selatan, Matan Hilir Utara, Muara Pawan, Pemaham, Simpang Dua, Benua Kayong, Tumbang Titi, Jelai Hulu, Kendawangan, Manis Mata, Marau, Nanga Tayap, Sandai, Simpang Hulu, Sungai Laur, Singkup', 53000, 45000, 0),
(668, 'Kab. Sanggau', 'Sanggau', 42000, 36000, 0),
(669, 'Kab. Sanggau', 'Toba, Tayan Hilir, Tayan Hulu, Sekayam, Parindu, Noyan, Mukok, Meliau, Kembayan, Jangkang, Bonti, Beduwai, Balai, Entikong', 53000, 45000, 0),
(670, 'Kota Singkawang', 'Singkawang, Singkawang Barat, Singkawang Utara, Singkawang Selatan, Singkawang Timur, Singkawang Tengah', 42000, 36000, 0),
(671, 'Kab. Sintang', 'Sintang', 42000, 36000, 0),
(672, 'Kab. Sintang', 'Kelam Permai, Binjai Hulu, Tempunak, Sepauk, Ketungau Hulu, Ketungau Tengah, Ketungau Hilir, Kayan Hilir, Kayan Hulu, Dedai, Ambalau, Sungai Tebelian', 53000, 45000, 0),
(673, 'Kab. Kapuas Hulu', 'Putussibau', 42000, 36000, 0),
(674, 'Kab. Kapuas Hulu', 'Semitau, Silat Hilir, Silat Hulu, Batu Datu, Boyan Tanjung, Kalis, Kedamin, Mentebah, Puring Kencana, Selimbau, Seberuang, Manday, Badau, Batang Lupar, Bunut Hilir, Bunut Hulu, Embaloh Hilir, Embaloh Hulu, Embau, Empanang, Hulu Gurung, Suhaid', 53000, 45000, 0),
(675, 'Kab. Bengkayang', 'Bengkayang, Sungai Raya', 42000, 36000, 0),
(676, 'Kab. Bengkayang', 'Samalantan, Sanggau Ledo, Seluas, Ledo, Jagoi Babang, Monterado, Suti Semarang, Teriak', 53000, 45000, 0),
(677, 'Kab. Landak', 'Ngabang', 42000, 36000, 0),
(678, 'Kab. Landak', 'Meranti, Kuala Behe, Sengah Temila, Menyuke, Menjalin, Mempawah Hulu, Mandor, Air Besar, Sebangki', 53000, 45000, 0),
(679, 'Kab. Melawi', 'Nanga Pinoh', 42000, 36000, 0),
(680, 'Kab. Melawi', 'Ambalau, Belimbing, Ella Hilir, Menukung, Sayan, Serawai, Sokan, Tanah Pinoh', 53000, 45000, 0),
(681, 'Kab. Pontianak', 'Mempawah, Siantan / Wajok', 42000, 36000, 0),
(682, 'Kab. Pontianak', 'Toho, Sungai Raya, Sungai Pinyuh, Sungai Kunyit, Sungai Kakap, Sungai Ambawang, Kubu, Rasau Jaya', 53000, 45000, 0),
(683, 'Kab. Sambas', 'Sambas', 42000, 36000, 0),
(684, 'Kab. Sambas', 'Tanggaran, Subah, Semparuk, Sebawi, Sajad, Sajingan, Jawai Selatan, Galing, Teluk Keramat, Tebas, Selakau, Sejangkung, Pemangkat, Paloh, Jawai, Tekarang', 53000, 45000, 0),
(685, 'Kab. Sekadau', 'Sekadau Hilir', 42000, 36000, 0),
(686, 'Kab. Sekadau', 'Belitang Hilir, Belitang Hulu, Nanga Taman, Nanga Mahap, Sekadau Hulu, Belitang', 53000, 45000, 0),
(687, 'Kab. Kubu Raya', 'Kubu Raya', 42000, 36000, 0),
(688, 'Kab. Kubu Raya', 'Batu Ampar, Rasau Jaya, Terentang, Teluk Pakedai, Sui Kakap, Sui Ambawang, Kuala Mandor, Sungai Raya', 53000, 45000, 0),
(689, 'Kab. Kubu Raya', 'Sui Raya', 53000, 45000, 30000),
(690, 'Kab. Kayong Utara', 'Sukadana', 42000, 36000, 0),
(691, 'Kab. Kayong Utara', 'Pulau Maya Karimata, Simpang Hilir, Teluk Batang, Seponti Jaya', 53000, 45000, 0),
(692, 'Kota Samarinda', 'Samarinda, Samarinda Seberang, Palaran, Samarinda Ilir, Samarinda Ulu, Samarinda Utara, Sungai Kunjang', 41000, 35000, 0),
(693, 'Kab. Kutai Barat', 'Sendawar', 55000, 47000, 0),
(694, 'Kab. Kutai Barat', 'Melak, Muara Pahu, Muara Lawa, Penyinggahan, Linggang Bigung, Barong Tongkok, Nyuwatan', 69000, 59000, 0),
(695, 'Kab. Kutai Barat', 'Long Pahangai, Long Hubung, Bentian Besar, Bongan, Damai, Jempang, Long Apari, Long Iram, Long Bagun', 104000, 0, 0),
(696, 'Kab. Sukabumi', 'Sukabumi', 9000, 8000, 19000),
(697, 'Kab. Sukabumi', 'Pelabuhan Ratu', 12000, 11000, 0),
(698, 'Kab. Sukabumi', 'Warung Kiara, Nyalindung, Nagrak, Lengkong, Kebonpedes, Kalapa Nunggal, Kadudampit, Kabandungan, Jampang Tengah, Pabuaran, Parung Kuda, Waluran, Tegal Buleud, Surade, Sukalarang, Simpenan, Sagaranten, Purabaya, Parakan Salak, Jampang Kulon, Gunung Guruh, Gegerbitung, Cidolog, Cidahu, Cicantayan, Cicurug, Cibitung, Cibadak, Caringin, Bojong Genteng, Bantargadung, Cidadap, Ciemas, Curugkembar, Cisolok, Kalibunder, Cireunghas, Ciracap, Cikakak, Cikembar, Cikidang', 15000, 14000, 0),
(699, 'Kab. Sukabumi', 'Cisaat, Sukaraja', 15000, 14000, 19000),
(700, 'Kota Sukabumi', 'Baros, LEMBUR SITU, Cikole, Citamiang, GUNUNG PUYUH, Warudoyong, Cibeureum', 9000, 8000, 19000),
(701, 'Kab. Cianjur', 'Cianjur', 12000, 11000, 19000),
(702, 'Kab. Cianjur', 'Pagelaran, Sindangbarang, Sukaluyu, Sukanagara, Sukaresmi, Takokak, Tanggeung, Warungkondang, Cipanas, Campaka Mulya, Cijati, Cikadu, Gekbrong, Pacet, Naringgul, Agrabinta, Bojongpicung, Campaka, Cibeber, Cibinong, Cidaun, CIKALONG KULON, Cilaku, Ciranjang, Cugenang, Kadupandak, Karangtengah, Mande, Leles', 15000, 14000, 0),
(703, 'Kota Surakarta', 'Solo, Banjarsari, Jebres, Laweyan, Pasar Kliwon, Serengan', 16000, 14000, 24000),
(704, 'Kab. Boyolali', 'Boyolali', 20000, 17000, 24000),
(705, 'Kab. Boyolali', 'Musuk, Wonosegoro, Teras, Simo, Selo, Sawit, Sambi, Nogosari, Ngemplak, Klego, Kemusu, Karanggede, Juwangi, Cepogo, Banyudono, Andong, Ampel, Mojosongo', 25000, 22000, 0),
(706, 'Kab. Karang Anyar', 'Karanganyar', 20000, 17000, 24000),
(707, 'Kab. Karang Anyar', 'Jaten, Gondangrejo, Tawangmangu, Ngargoyoso, Mojogedang, Matesih, Kerjo, Kebakkramat, Karangpandan, Jumapolo, Jumantono, Jenawi, Jatiyoso, Jatipuro, Tasikmadu', 25000, 22000, 0),
(708, 'Kab. Karang Anyar', 'Colomadu', 25000, 22000, 24000),
(709, 'Kab. Klaten', 'Klaten', 20000, 17000, 24000),
(710, 'Kab. Klaten', 'Kemalang, Manisrenggo, Ngawen, Pedan, Polanharjo, Prambanan, Trucuk, Tulung, Wedi, Wonosari, Kebonarum, Karangdowo, Karanganom, Bayat, Cawas, Ceper, Delanggu, Gantiwarno, Jatinom, Jogonalan, Juwiring, Kalikotes, Karangnongko', 25000, 22000, 0),
(711, 'Kab. Klaten', 'Klaten Selatan, Klaten Tengah, Klaten Utara', 25000, 22000, 24000),
(712, 'Kab. Sragen', 'Sragen', 20000, 17000, 24000),
(713, 'Kab. Sragen', 'Plupuh, Sambungmacan, Sambirejo, Sidoharjo, Sukodono, Sumberlawang, Tanon, Tangen, Ngrampal, Mondokan, Gesi, Gemolong, Gondang, Jenar, Kalijambe, Kedawung, Miri, Masaran, Karangmalang', 25000, 22000, 0),
(714, 'Kab. Sukoharjo', 'Sukoharjo, Kartasura', 20000, 17000, 24000),
(715, 'Kab. Sukoharjo', 'Mojolaban / Palur, Grogol, Gatak, Bendosari, Baki, Bulu, Tawangsari, Polokarto, Nguter, Weru', 25000, 22000, 0),
(716, 'Kab. Wonogiri', 'Wonogiri', 20000, 17000, 24000),
(717, 'Kab. Wonogiri', 'Ngadirojo, Nguntoronadi, Pracimantoro, Purwantoro, Selogiri, Sidoharjo, Slogohimo, Tirtomoyo, Wuryantoro, Puhpelem, Manyaran, Kismantoro, Karangtengah, Baturetno, Batuwarno, Bulukerto, Eromoko, Girimarto, Giritontro, Giriwoyo, Jatipurno, Jatiroto, Jatisrono, Paranggupito', 25000, 22000, 0),
(718, 'Kab. Sorong', 'Sorong', 80000, 68000, 0),
(719, 'Kab. Sorong', 'Segun, Sayosa, Klamono, Fef, Beraur, Aimas, Abun, Seget, Sausapor, Salawati, Moraid, Makbon', 144000, 123000, 0),
(720, 'Kota Sorong', 'Sorong Barat, Sorong Timur', 80000, 68000, 0),
(721, 'Kab. FakFak', 'FAKFAK', 115000, 98000, 0),
(722, 'Kab. FakFak', 'Fakfak Barat, Fakfak Timur, Kokas', 144000, 123000, 0),
(723, 'Kab. Kaimana', 'Kaimana', 115000, 98000, 0),
(724, 'Kab. Kaimana', 'Buruwai, Teluk Arguni, Teluk Etna', 144000, 123000, 0),
(725, 'Kab. Raja Ampat', 'Waisai', 115000, 98000, 0),
(726, 'Kab. Raja Ampat', 'Waigeo Timur, Waigeo Selatan, Waigeo Barat, Teluk Mayalibit, Samate, Misool Timur Selatan, Misool, Kofiau, Kepulauan Ayau, Waigeo Utara', 144000, 123000, 0),
(727, 'Kab. Sorong Selatan', 'Teminabuan', 115000, 98000, 0),
(728, 'Kab. Sorong Selatan', 'Seremuk, Sawiat, Moswaren, Mare, Kokoda, Kais, Inanwatan, Ayamaru Utara, Ayamaru, Aitinyo, Aifat Timur, Aifat, Wayer', 144000, 123000, 0),
(729, 'Kab. Teluk Bintuni', 'Bintuni', 115000, 98000, 0),
(730, 'Kab. Teluk Bintuni', 'Moskona Utara, Moskona Selatan, Merdey, Kuri, Door, Fafuwar, Babo, Aranday, Tembuni', 144000, 123000, 0),
(731, 'Kab. Teluk Wondama', 'Rasei', 115000, 98000, 0),
(732, 'Kab. Teluk Wondama', 'Rumberpon, Wamesa, Wasior, Wasior Barat, Wasior Selatan, Wasior Utara, Windesi', 144000, 123000, 0),
(733, 'Kab. Manokwari', 'Manokwari', 115000, 98000, 0),
(734, 'Kab. Manokwari', 'Prafi, Minyambouw, Masni, Warmare, Ransiki, Oransbari, Kebar, Anggi, Amberbaken, Sugurey', 144000, 123000, 0),
(735, 'Kota Semarang', 'Semarang, Tembalang, Semarang Utara, Semarang Timur, Semarang Tengah, Semarang Selatan, Semarang Barat, Pedurungan, Ngaliyan, Mijen, Gunungpati, Genuk, Gayamsari, Gajahmungkur, Candisari, Banyumanik, Tugu', 16000, 14000, 24000),
(736, 'Kab. Jepara', 'Jepara', 20000, 17000, 0),
(737, 'Kab. Jepara', 'Kembang, Kalinyamatan, Welahan, Pecangaan, Nalumsari, Mlonggo, Mayong, Keling, Kedung, Batealit, Bangsri, Tahunan', 25000, 22000, 0),
(738, 'Kab. Jepara', 'Karimunjawa', 38000, 0, 0),
(739, 'Kab. Kudus', 'Kudus', 20000, 17000, 24000),
(740, 'Kab. Kudus', 'Dawe, Jekulo, Mejobo, Undaan, Gebog, Bae', 25000, 22000, 0),
(741, 'Kab. Kudus', 'Jati, Kaliwungu', 25000, 22000, 24000),
(742, 'Kota Pekalongan', 'Pekalongan, Pekalongan Barat, Pekalongan Selatan, Pekalongan Timur, Pekalongan Utara', 20000, 17000, 0),
(743, 'Kab. Banyumas', 'Purwokerto, Ajibarang, Banyumas', 20000, 17000, 0),
(744, 'Kab. Banyumas', 'Purwojati, Rawalo, Sokaraja, Somagede, Sumpyuh /Sumpiuh, Sumbang, Tambak, Wangon, Purwokerto Barat, Purwokerto Selatan, Purwokerto Timur, Patikraja, Pakuncen, Baturaden, Cilongok, Gumelar, Jatilawang, Kalibagor, Karanglewas, Kebasen, Kedungbanteng, Kembaran, Kemranjen, Lumbir, Purwokerto Utara', 25000, 22000, 0),
(745, 'Kab. Batang', 'Batang', 20000, 17000, 0),
(746, 'Kab. Batang', 'Kandeman, Banyuputih, Wonotunggal, Warungasem, Tulis, Tersono, Subah, Reban, Limpung, Gringsing, Blado, Bawang, Bandar, Pecalungan', 25000, 22000, 0),
(747, 'Kab. Blora', 'Blora, Cepu', 20000, 17000, 0),
(748, 'Kab. Blora', 'Randublatung, Kradenan /menden, Kedungtuban, Jiken, Jati, Tunjungan, Todanan, Ngawen, Kunduran, Jepon, Japah, Bogorejo, Banjarejo, Sambong', 25000, 22000, 0),
(749, 'Kab. Bojonegoro', 'Bojonegoro', 20000, 17000, 0),
(750, 'Kab. Bojonegoro', 'Ngraho, Padangan, Purwosari, Sugihwaras, Sumberejo, Tambakrejo, Temayang, Trucuk, Kedewan, Sekar, Sukosewu, Ngasem, Ngambon, Margomulyo, Balen, Baureno, Bubulan, Dander, Kalitidu, Kanor, Kapas, Kasiman, Kedungadem, Kepohbaru, Malo, Gondang', 25000, 22000, 0),
(751, 'Kab. Brebes', 'Brebes, Bumiayu', 20000, 17000, 0),
(752, 'Kab. Brebes', 'Tonjong, Tanjung, Songgom, Sirampog, Salem, Paguyangan, Losari, Larangan, Ketanggungan, Kersana, Jatibarang, Bulakamba, Bantarkawung, Banjarharjo, Wanasari', 25000, 22000, 0),
(753, 'Kab. Demak', 'Demak', 20000, 17000, 0),
(754, 'Kab. Demak', 'Wonosalam, Wedung, Sayung, Mranggen, Mijen, Karanganyar, Karangawen, Karangtengah, Guntur, Gajah, Dempet, Bonang, Kebonagung', 25000, 22000, 0),
(755, 'Kab. Kendal', 'Kendal', 20000, 17000, 24000),
(756, 'Kab. Kendal', 'Rowosari /Weleri Utara, Ringinarum, Ngampel, Kangkung, Sukorejo, Plantungan, Pegandon, Patean, Singorojo, Boja, Brangsong, Gemuh, Kaliwungu, Limbangan, Pagerruyung', 25000, 22000, 0),
(757, 'Kab. Kendal', 'Weleri, Cepiring, Patebon', 25000, 22000, 24000),
(758, 'Kab. Pati', 'Pati', 20000, 17000, 0),
(759, 'Kab. Pati', 'Margoyoso, Pucakwangi, Sukolilo, Tambakromo, Tayu, Telogowungu, Trangkil, Wedarijaksa, Margorejo, Kayen, Juwana, Batangan, Cluwak, Dukuhseti, Gabus, Gembong, Gunungwungkal, Jaken, Jakenan, Winong', 25000, 22000, 0),
(760, 'Kab. Pemalang', 'Pemalang', 20000, 17000, 0),
(761, 'Kab. Pemalang', 'Warungpring, Ulujami, Taman, Randudongkal, Pulosari, Petarukan, Moga, Comal, Bodeh, Belik, Bantarbolang, Ampelgading, Watukumpul', 25000, 22000, 0),
(762, 'Kab. Grobogan', 'Purwodadi', 20000, 17000, 0),
(763, 'Kab. Grobogan', 'Toroh, Tegowanu, Tawangharjo, Tanggungharjo, Pulokulon, Penawangan, Ngaringan, Kradenan, Klambu, Kedungjati, Karangrayung, Gubug, Grobogan, Godong, Geyer, Gabus, Brati, Wirosari', 25000, 22000, 0),
(764, 'Kab. Rembang', 'Rembang', 20000, 17000, 0),
(765, 'Kab. Rembang', 'Sulang, Sluke, Sedan, Sarang, Sale, Pancur, Pamotan, Lasem, Kragan, Kaliori, Gunem, Bulu, Sumber', 25000, 22000, 0),
(766, 'Kota Salatiga', 'Salatiga, Argomulyo, Sidomukti, Sidorejo, Tingkir', 20000, 17000, 24000),
(767, 'Kab. Tegal', 'Slawi', 20000, 17000, 0),
(768, 'Kab. Tegal', 'Tarub, Talang, Suradadi, Kramat, Dukuhturi, Adiwerna, Pangkah, Pagerbarang, Margasari, Lebaksiu, Kedungbanteng, Jatinegara, Dukuhwaru, Bumijawa, Bojong, Balapulang, Warureja', 25000, 22000, 0),
(769, 'Kota Tegal', 'Tegal, Margadana, Tegal Barat, Tegal Selatan, Tegal Timur', 20000, 17000, 0),
(770, 'Kab. Semarang', 'Ungaran', 16000, 14000, 24000),
(771, 'Kab. Semarang', 'Ambarawa', 20000, 17000, 24000),
(772, 'Kab. Semarang', 'Tengaran, Sumowono, Suruh, Susukan, Pabelan, Kaliwungu, Jambu, Getasan, Banyubiru, Bancak, Bringin', 25000, 22000, 0),
(773, 'Kab. Semarang', 'Bergas, Bawen / Doplang, Pringapus, Tuntang, Ungaran Barat, Ungaran Timur', 25000, 22000, 24000),
(774, 'Kab. Purbalingga', 'Purbalingga, Rembang', 20000, 17000, 0),
(775, 'Kab. Purbalingga', 'Padamara, Kertanegara, Karangjambu, Mrebet, Kutasari, Kemangkon, Kejobong, Karangreja, Karangmoncol, Karanganyar, Kalimanah, Kaligondang, Bukateja, Bojongsari, Bobotsari, Pengadegan', 25000, 22000, 0),
(776, 'Kab. Banjarnegara', 'Banjarnegara', 20000, 17000, 0),
(777, 'Kab. Banjarnegara', 'Wanadadi, Susukan, Sigaluh, Rakit, Purworejo Klampok, Purwanegara, Punggelan, Pejawaran, Pagentan, Mandiraja, Madukara, Karangkobar, Kalibening, Bawang, Batur, Banjarmangu, Wanayasa', 25000, 22000, 0),
(778, 'Kab. Pekalongan', 'Kajen, Wonokerto, Wiradesa, Tirto, Talun, Sragi, Siwalan, Petungkriono, Paninggaran, LEBAK BARANG, Kesesi, Kedungwuni, Karangdadap, Karanganyar, KANDANG SERANG, Doro, Buaran, Bojong, Wonopringgo', 25000, 22000, 0),
(779, 'Kota Surabaya', 'Benowo', 17000, 15000, 0),
(780, 'Kota Surabaya', 'Surabaya, Rungkut, Sambikerep, Sawahan, Semampir, Simokerto, Sukolilo, Sukomanunggal, Tambaksari, Tandes, Tegalsari, Tenggilis Mejoyo, Wiyung, Wonocolo, Pakal, Pabean Cantikan, Mulyorejo, Asemrowo, Bubutan, Bulak, Dukuh Pakis, Gayungan, Genteng, Gubeng, Gununganyar, Jambangan, Karangpilang, Kenjeran, Krembangan, Lakarsantri, Wonokromo', 17000, 15000, 25000),
(781, 'Kab.Gresik', 'Gresik', 17000, 15000, 25000),
(782, 'Kab.Gresik', 'Panceng, Sidayu, Tambak, Ujung Pangkah, Dukun, Duduk Sampeyan, Wringinanom, Cerme, Bungah, Benjeng, Balongpanggang, Sangkapura', 27000, 24000, 0),
(783, 'Kab.Gresik', 'Menganti, Manyar, Kedamean, Driyorejo, Kebomas', 27000, 24000, 25000),
(784, 'Kab. Lamongan', 'Lamongan', 22000, 19000, 25000),
(785, 'Kab. Lamongan', 'Paciran, Pucuk, Sambeng, Solokuro, Sekaran, Sugio, Sukodadi, Sukorame, Tikung, Turi, Maduran, Ngimbang, Modo, Mantup, Babat, Bluluk, Brondong, Deket, Glagah, Kalitengah, Karangbinangun, Karanggeneng, Kedungpring, Kembangbahu, Laren, Sarirejo', 27000, 24000, 0),
(786, 'Kab. Bangkalan', 'Bangkalan', 22000, 19000, 0),
(787, 'Kab. Bangkalan', 'Tragah, Tanjungbumi, Tanah Merah, Socah, Sepulu, Modung, Labang, Konang, Kokop, Klampis, Kwanyar, Kamal, Geger, Galis, Balega, Arosbaya, Burneh', 27000, 24000, 0),
(788, 'Kab. Jombang', 'Jombang', 22000, 19000, 25000),
(789, 'Kab. Jombang', 'Ngoro, Perak, Peterongan, Plandaan, Ploso, Sumobito, Tembelang, Wonosalam, Mojowarno, Mojoagung, Megaluh, Bandar Kedungmulyo, Bareng, Diwek, Gudo, Jogoroto, Kabuh, Kesamben, Kudu, Ngusikan', 27000, 24000, 0),
(790, 'Kab. Nganjuk', 'Nganjuk', 22000, 19000, 0),
(791, 'Kab. Nganjuk', 'Sukomoro, Tanjunganom, Wilangan, Kertosono, Baron, Jatikalen, Lengkong, Ngronggot, Sawahan, Rejoso, Bagor, Berbek, Gondang, Loceret, Ngetos, Ngluyu, Pace, Prambon, Patianrowo', 27000, 24000, 0),
(792, 'Kab. Pamekasan', 'Pamekasan', 22000, 19000, 0),
(793, 'Kab. Pamekasan', 'Waru, Tlanakan, Proppo, Pegantenan, Pasean, Palengaan, Pakong, Larangan, Kadur, Galis, Batu Marmar, Pademawu', 27000, 24000, 0),
(794, 'Kab. Sampang', 'Sampang', 22000, 19000, 0),
(795, 'Kab. Sampang', 'Tambelangan, Sreseh, Sokobanah, Robatal, Omben, Ketapang, KEDUNDUNG, Jrengik, Camplong, Banyuates, Torjun', 27000, 24000, 0),
(796, 'Kab. Sumenep', 'Sumenep', 22000, 19000, 0),
(797, 'Kab. Sumenep', 'Kalianget, Lenteng, Manding, Pasongsongan, Pragaan, Rubaru, Saronggi, Batuan, GulukGuluk, Bluto, Batuputih, Dasuk, Dungkek, Ganding, Gapura, Ambunten, Batang Batang', 27000, 24000, 0),
(798, 'Kab. Sumenep', 'Talango, Arjasa, Sapeken, Raas, Gayam, Nonggunong, Masalembu, Giligenteng, Kangean', 41000, 0, 0),
(799, 'Kab. Tuban', 'Tuban', 22000, 19000, 25000),
(800, 'Kab. Tuban', 'Plumbang, Rengel, Semanding, Senori, Singgahan, Soko, Tambakboyo, Widang, Parengan, Palang, Bancar, Bangilan, Jatirogo, Jenu, Kenduruan, Kerek, Merakurak, Montong, Grabagan', 27000, 24000, 0),
(801, 'Kab. Tulungagung', 'Tulungagung', 22000, 19000, 0),
(802, 'Kab. Tulungagung', 'Kauman, Boyolangu, Tanggung Gunung, Sumbergempol, Sendang, Rejotangan, Pucanglaban, Pakel, Pagerwojo, Ngunut, Ngantru, Karangrejo, Kalidawir, Gondang, Campurdarat, Besuki, Bandung, Kedungwaru', 27000, 24000, 0),
(803, 'Kab. Trenggalek', 'Trenggalek', 22000, 19000, 0),
(804, 'Kab. Trenggalek', 'Watulimo, Tugu, Pule, Pogalan, Panggul, Munjungan, Karangan, Kampak, Gandusari, Durenan, Dongko, Bendungan, Suruh', 27000, 24000, 0),
(805, 'Kota Tangerang', 'Tangerang, Periuk, Neglasari, Larangan, Karawaci, Karangtengah, Jatiuwung, Cipondoh, Cibodas, Benda, Batuceper, Ciledug, Pinang', 8000, 7000, 15000),
(806, 'Kab. Tangerang', 'Jayanti, Kemiri, Kronjo, Kresek, Jambe, Mauk', 8000, 7000, 0),
(807, 'Kab. Tangerang', 'Pamulang, Ciputat, Cisauk, Tigaraksa, Kosambi /Salembaran jati, Pagedangan, Panongan, Pondok Aren / Jurang Mangu, Teluknaga, Serpong, Balaraja, Cikupa, Cisoka, Curug, Legok, PASAR KEMIS, Pakuhaji, Rajeg, Sepatan /Jatimulya/Cengklong, Sukadiri', 8000, 7000, 15000),
(808, 'Kab. Mimika', 'Timika', 85000, 73000, 0),
(809, 'Kab. Mimika', 'Tembaga Pura, Mimika Timur Tengah, Mimika Timur Jauh, Mimika Timur, Mimika Baru, Mimika Barat Tengah, Mimika Barat Jauh, Mimika Barat', 110000, 94000, 0),
(810, 'Kab. Mimika', 'Kuala Kencana, Jita, Jila, Agimuga', 138000, 118000, 0),
(811, 'Kab. Belitung', 'Tanjung Pandan', 23000, 20000, 0),
(812, 'Kab. Belitung', 'Membalong, Selat Nasik, Badau, Sijuk', 33000, 29000, 0),
(813, 'Kab. Belitung Timur', 'Manggar', 26000, 23000, 0),
(814, 'Kab. Belitung Timur', 'Dendang, Gantung, Kelapa Kampit', 33000, 29000, 0),
(815, 'Kota Bandar Lampung', 'Bandar Lampung, Teluk Betung Selatan, Teluk Betung Barat, Tanjung Senang, Tanjung Karang Timur, Tanjung Karang Pusat, Tanjung Karang Barat, Sukarame, Sukabumi, Rajabasa, Panjang, Kemiling, Kedaton, Teluk Betung Utara', 17000, 15000, 26000),
(816, 'Kab. Lampung Selatan', 'Kalianda, Bakauheuni', 35000, 30000, 0),
(817, 'Kab. Lampung Selatan', 'Way Panji, Tanjungsari, Sragi, Sidomulyo, Rajabasa, Merbau Mataram, Ketapang, Katibung, Jati Agung, Candipuro, Tanjung Bintang, Natar, Panengahan, Palas, Way Sulan', 44000, 38000, 0),
(818, 'Kab. Lampung Utara', 'Kotabumi, Bukit Kemuning', 35000, 30000, 0),
(819, 'Kab. Lampung Utara', 'Kotabumi Utara, Kotabumi Selatan, Bunga Mayang, Abung Tinggi, Abung Tengah, Abung Surakarta, Abung Semuli, Tanjung Raja, Sungkai Utara, Sungkai Selatan, Abung Timur, Abung Selatan, Abung Barat, Muara Sungkai', 44000, 38000, 0),
(820, 'Kota Metro', 'Metro, Metro Barat, Metro Pusat, Metro Selatan, Metro Timur, Metro Utara', 35000, 30000, 0),
(821, 'Kab. Lampung Barat', 'Liwa, Pesisir Tengah / Krui, Sumber Jaya', 35000, 30000, 0),
(822, 'Kab. Lampung Barat', 'Sukau, Sekincau, Lemong, Karya Penggawa, Bengkunat, Batu Brak, Pesisir Selatan, Pesisir Utara, Belalau, Balik Bukit, Way Tenong', 44000, 38000, 0),
(823, 'Kab. Lampung Barat', 'Suoh', 66000, 0, 0),
(824, 'Kab. Lampung Tengah', 'Gunung Sugih', 35000, 30000, 0),
(825, 'Kab. Lampung Tengah', 'Kalirejo, Kota Gajah, Pubian, Punggur, Rumbia, Sendang Agung, Seputih Agung, Terusan Nunyai, Trimurjo, WAY PANGUBUAN, Way Seputih, Bumi Ratu Nuban, Bumi Nabung, Padang Ratu, Seputih Mataram, Seputih Banyak, Seputih Surabaya, Seputih Raman, Terbanggi Besar / Bandar Jaya, Anak Tuha, Bandar Mataram, Bandar Surabaya, Bangunrejo, Bekri, Bandar Jaya', 44000, 38000, 0),
(826, 'Kab. Lampung Tengah', 'Selagai Lingga', 66000, 0, 0),
(827, 'Kab. Lampung Timur', 'Sukadana', 35000, 30000, 0),
(828, 'Kab. Lampung Timur', 'Gunung Pelindung, Labuhan Ratu, Margatiga, Mataram Baru, Melinting, Metro Kibang, Pasir Sakti, Sekampung Udik, Waway Karya, Bumi Agung, Braja Slebah, Batanghari Nuban, BATANG HARI, Jabung/Gunung balak, Labuhan Maringgai, Pekalongan, Purbolinggo, Raman Utara, Sekampung, Way Jepara, BANDAR SRIBAWANO, Way Bungur', 44000, 38000, 0),
(829, 'Kab. Way Kanan', 'Blambangan umpu', 35000, 30000, 0),
(830, 'Kab. Way Kanan', 'Rebang Tangkas, Pakuan Ratu, Negeri Batin, Gunung Labuhan, Banjit/Banjid, Kasui, Baradatu, Bahuga, Way Tuba', 44000, 38000, 0),
(831, 'Kab. Way Kanan', 'Negeri Agung, Negeri Besar', 66000, 0, 0),
(832, 'Kab. Tulang Bawang', 'Menggala', 35000, 30000, 0),
(833, 'Kab. Tulang Bawang', 'Tumi Jajar, Tanjung Raya, Simpang Pematang, Penawar Tama, Lambu Kibang, Gunung Terang, Gedung Meneng, Gedung Aji, Banjar Agung, Tulang Bawang Udik, Tulang Bawang Tengah, Mesuji, Way Serdang', 44000, 38000, 0),
(834, 'Kab. Tulang Bawang', 'Rawajitu Selatan, Rawajitu Utara', 66000, 0, 0),
(835, 'Kab. Tanggamus', 'Kota Agung, Pringsewu, Talang Padang', 35000, 30000, 0),
(836, 'Kab. Tanggamus', 'Sumberejo, Semaka, Pugung, Pematang Sawa, Pardasuka, Kelumbayan, Cukup Balak, Adi Luwih, Wonosobo, Sukoharjo, Pulau Panggung, Pagelaran, Gading Rejo, Ulubelu', 44000, 38000, 0),
(837, 'Kab. Pesawaran', 'Gedong Tataan', 35000, 30000, 0),
(838, 'Kab. Pesawaran', 'Kedondong, Padang Cermin, Negeri Katon, Pundung Pidada, Tegineneng, Way Lima', 44000, 38000, 0),
(839, 'Kota Tanjung Pinang', 'Tanjung Pinang, Bukit Bestari, Tanjung Pinang Barat, Tanjung Pinang Kota, Tanjung Pinang Timur', 32000, 28000, 0),
(840, 'Kota Tanjung Pinang', 'Senggarang, Dompak, Pulau Penyengat', 63000, 54000, 0),
(841, 'Kab. Bintan', 'Tanjung Uban/Bintan Utara', 50000, 43000, 0),
(842, 'Kab. Bintan', 'Bandar Sri Bintan, Bintan Timur, Gunung Kijang, Tambelan, Teluk Bintan, Teluk Sebong, Lagoi', 63000, 54000, 0),
(843, 'Kota Tarakan', 'Tarakan, Tarakan Barat, Tarakan Tengah, Tarakan Timur, Tarakan Utara', 49000, 42000, 0),
(844, 'Kab. Bulungan', 'Tanjung Selor', 55000, 47000, 0),
(845, 'Kab. Bulungan', 'Tanjung Palas Timur, Tanjung Palas Tengah, Tanjung Palas Barat, Tanjung Palas, Sekatak, Peso Hilir, Pulau Bunyu, Peso / Longpeso, Tanjung Palas Utara', 69000, 59000, 0),
(846, 'Kab. Malinau', 'Malinau, Malinau Barat, Malinau Selatan, Malinau Utara', 55000, 47000, 0),
(847, 'Kab. Malinau', 'Mentarang, Kayan Hulu, Kayan Hilir, Pujungan, Sungai Boh', 69000, 59000, 0),
(848, 'Kab. Nunukan', 'Nunukan, Sebatik', 55000, 47000, 0),
(849, 'Kab. Nunukan', 'Krayan, Lumbis, Krayan Selatan, Sebuku', 69000, 59000, 0),
(850, 'Kab. Tana Tidung', 'Tanah Tidung', 55000, 47000, 0),
(851, 'Kab. Tana Tidung', 'Sembakung, Sesayap, Sesayap Hilir, Tanah Lia', 69000, 59000, 0),
(852, 'Kota Ternate', 'Ternate', 55000, 47000, 0),
(853, 'Kota Ternate', 'Moti, Ternate Selatan, Ternate Utara', 78000, 67000, 0),
(854, 'Kab. Halmahera Barat', 'Jailolo', 62000, 53000, 0),
(855, 'Kab. Halmahera Barat', 'Jailolo Selatan, Sahu', 78000, 67000, 0),
(856, 'Kab. Halmahera Barat', 'Ibu, Loloda', 117000, 0, 0),
(857, 'Kab. Halmahera Selatan', 'Labuha', 62000, 53000, 0),
(858, 'Kab. Halmahera Selatan', 'Bacan Timur, Bacan Selatan, Bacan', 78000, 67000, 0),
(859, 'Kab. Halmahera Selatan', 'Pulau Makian, Obi Selatan, Obi, Kayoa, Gane Timur, Gane Barat', 117000, 0, 0),
(860, 'Kab. Halmahera Tengah', 'Weda', 62000, 53000, 0),
(861, 'Kab. Halmahera Tengah', 'Gebe', 78000, 67000, 0),
(862, 'Kab. Halmahera Tengah', 'Patani', 117000, 0, 0),
(863, 'Kab. Halmahera Timur', 'Maba', 62000, 53000, 0),
(864, 'Kab. Halmahera Timur', 'Maba Selatan', 78000, 67000, 0),
(865, 'Kab. Halmahera Timur', 'Wasile, Wasile Selatan', 117000, 0, 0),
(866, 'Kab. Halmahera Utara', 'Tobelo', 62000, 53000, 0),
(867, 'Kab. Halmahera Utara', 'Tobelo Selatan, Galela, Kao', 78000, 67000, 0),
(868, 'Kab. Halmahera Utara', 'Loloda Utara, Malifut, Morotai Selatan, Morotai Selatan Barat, Morotai Utara', 117000, 0, 0),
(869, 'Kab. Kepulauan Sula', 'Sanana', 62000, 53000, 0),
(870, 'Kab. Kepulauan Sula', 'Mangoli Barat, Mangoli Timur', 78000, 67000, 0),
(871, 'Kab. Kepulauan Sula', 'Nggele, Sula Besi Barat, Taliabu Barat, Taliabu Timur', 117000, 0, 0),
(872, 'Kota Tidore', 'Tidore', 62000, 53000, 0),
(873, 'Kota Tidore', 'Tidore Selatan, Tidore Utara', 78000, 67000, 0),
(874, 'Kota Tidore', 'Oba, Oba Utara', 117000, 0, 0),
(875, 'Kota Makassar', 'Ujung Pandang, Ujung Tanah, Tamalanrea, Tallo, Rappocini, Panakkukang, Mariso, Manggala, Mamajang, Bontoala, Biring Kanaya, Tamalate, Wajo', 32000, 28000, 41000),
(876, 'Kab. Bantaeng', 'Bantaeng', 49000, 42000, 0),
(877, 'Kab. Bantaeng', 'Bissapu, Tompobulu, Eremerasa, Pajukukang, Uluere', 62000, 53000, 0),
(878, 'Kab. Barru', 'Barru', 49000, 42000, 0),
(879, 'Kab. Barru', 'Mallusetasi, Soppeng Riaja, Tanete Riaja, Tanete Rilau, Balusu, Pujananting', 62000, 53000, 0),
(880, 'Kab. Bulukumba', 'Bulukumba', 49000, 42000, 0),
(881, 'Kab. Bulukumba', 'Ujung Bulu, Riau Ale, Kindang, Kajang, Hero LangeLange /Heralangelange/Her, Gantarang /Gantarangkindang/Ganking, Bontotiro, Bonto Bahari, Ujung Loe', 62000, 53000, 0),
(882, 'Kab. Enrekang', 'Enrekang', 49000, 42000, 0),
(883, 'Kab. Enrekang', 'Alla, Anggeraja, Baraka, Maiwa, Alla Timur, Anggeraja Timur, Enrekang Selatan, Maiwa Atas', 62000, 53000, 0),
(884, 'Kab. Jeneponto', 'Jeneponto', 49000, 42000, 0),
(885, 'Kab. Jeneponto', 'Turatea, Bontoramba, Binamu, Bangkala Barat, Tamalatea, Kelara, Batang, Bangkala, Arungkeke', 62000, 53000, 0),
(886, 'Kab. Tana Toraja', 'Makale', 49000, 42000, 0),
(887, 'Kab. Tana Toraja', 'Rano, Malimbong Balepe, Masanda, Mappak, Makale Utara, Makale Selatan, Kurra, Gandang Batu Silang, Simbuang, Rantetayo, Bituang, Sangalla, Saluputti, Mengkendek, Bonggakaradeng, Rembon', 62000, 53000, 0),
(888, 'Kab. Tana Toraja Utara', 'Rantepao', 49000, 42000, 0),
(889, 'Kab. Tana Toraja Utara', 'Buntu Pepasan, Denpina/Dende Piongan Napo, Kapala Pitu, Kesu, Nanggala, Rantebua, Sopai, Tallunglipu, Baruppu, Bangkelekila, Rindingalo, Sanggalangi, Sesean, Buntao Rantebua, Tondon Nanggala, Soloara, Awan Rante Karua, Balusu, Tikala', 62000, 53000, 0),
(890, 'Kab. Mamuju', 'Mamuju', 49000, 42000, 0),
(891, 'Kab. Mamuju', 'Tommo, Tobadak, Tapalang Barat, Simboro dan Kepulauan, Sampaga, Papalang, Pangale, Karossa, Bonehau, Tappalang, Kalukku, Kalumpang, BudongBudong, Topoyo', 62000, 53000, 0),
(892, 'Kab. Maros', 'Maros', 32000, 28000, 0),
(893, 'Kab. Maros', 'Tompu Bulu, Simbang, Moncongloe, Marusu, Maros Baru, Lau, Cenrana, Tanralili, Maros Utara, Mandai, Mallawa, Camba, Bantimurung, Turikale', 62000, 53000, 0),
(894, 'Kab. Majene', 'Majene', 49000, 42000, 0),
(895, 'Kab. Majene', 'Malunda, Pamboang, Sendana, Banggae', 62000, 53000, 0),
(896, 'Kota Palopo', 'Palopo, Telluwanua, Wara, Wara Selatan, Wara Utara', 49000, 42000, 0),
(897, 'Kab. Pinrang', 'Pinrang', 49000, 42000, 0);
INSERT INTO `tarif` (`tarif_id`, `kota`, `kecamatan`, `reg`, `oke`, `yes`) VALUES
(898, 'Kab. Pinrang', 'Tiroang, Paleteang, Lanrisang, Batulappa, Suppa, Patampanua, Mattirosompe, Mattiro Bulu, Lembang, Duampanua, Cempa, Watang Sawitto', 62000, 53000, 0),
(899, 'Kab. Polewali Mandar', 'Polewali', 49000, 42000, 0),
(900, 'Kab. Polewali Mandar', 'Matangnga, Matakali, Mapilli, Luyo, Limboro, Binuang, Balanipa, Anreapi, Allu, Wonomulyo, Tutallu, Tinambung, Campalagian, Tapango', 62000, 53000, 0),
(901, 'Kab. Sindenreng Rappang', 'Sidenreng', 49000, 42000, 0),
(902, 'Kab. Sindenreng Rappang', 'Pitu Riawa, Pitu Riase, Maritengngae, Kulo, Watang Pulu, Tellulimpo E, Panca Lautang, Panca Rijang, Duapitue, Baranti, Sidrap', 62000, 53000, 0),
(903, 'Kab. Wajo', 'Sengkang', 49000, 42000, 0),
(904, 'Kab. Wajo', 'Penrang, Keera, Gilireng, Bola, Tana Sitolo, Takkalalla, Sajoanging, Sabbang Paru, Pitumpanua, Pamanna, Maniang Pajo, Majauleng, Belawa, Tempe', 62000, 53000, 0),
(905, 'Kab. Sinjai', 'Sinjai', 49000, 42000, 0),
(906, 'Kab. Sinjai', 'Sinjai Borong, Pulau Sembilan, Bulupoddo, Sinjai Utara, Sinjai Timur, Sinjai Tengah, Sinjai Selatan, Sinjai Barat, Tellu Limpoe', 62000, 53000, 0),
(907, 'Kab. Goa', 'Sungguminasa', 32000, 28000, 0),
(908, 'Kab. Goa', 'Somba Opu, Biringbulu, Barombong, Tompobulu, Tinggimoncong, Parangloe, Pallangga, Bungaya, Bontonompo, Bontomarannu, Bajeng, Tombolo Pao', 62000, 53000, 0),
(909, 'Kab. Takalar', 'Takalar', 49000, 42000, 0),
(910, 'Kab. Takalar', 'Galesong Selatan, Galesong Utara, Mangara Bombang, Mappakasunggu, Patallassang, Polobangkeng Selatan, Polobangkeng Utara', 62000, 53000, 0),
(911, 'Kab. Bone', 'Watampone', 49000, 42000, 0),
(912, 'Kab. Bone', 'Sibulue, Tellu Siattinge, Tonra, Ulaweng, Amali, Awangpone, Bengo, Palakka, Patimpeng, Tanete Riattang, Tanete Riattang Barat, Salomekko, Ponre, Mare, Ajangale, Barebbo, Bontocani, Cenrana, Cina, Dua Boccoe, Kahu, Kajuara, Lamuru, Lappariaja, Libureng, Tanete Riattang Timur', 62000, 53000, 0),
(913, 'Kab. Soppeng', 'Watansoppeng', 49000, 42000, 0),
(914, 'Kab. Soppeng', 'Donri Donri, Lili Riaja, Lili Rilau, Mario Riwawo, Mario Riawa, Ganra, Lalabata', 62000, 53000, 0),
(915, 'Kab. Selayar', 'Benteng', 49000, 42000, 0),
(916, 'Kab. Selayar', 'Bontosikuyu, Bontomatene, Pasimarannu, Pasimasunggu, Bontoharu, Bontomanai, Pasilambena, Takabonerate', 62000, 53000, 0),
(917, 'Kab. Pangkajene Kepulauan', 'Pangkajene', 49000, 42000, 0),
(918, 'Kab. Pangkajene Kepulauan', 'Mandalle, Kalukuang Masalima, Segeri, Liukang Tupabiring, Liukang Tangaya, Labakkang, Bungoro, Balocci, Tondong Talasa', 62000, 53000, 0),
(919, 'Kota ParePare', 'ParePare, Bacukiki, Soreang, Ujung', 49000, 42000, 0),
(920, 'Kab. Luwu Utara', 'Belopa, Masamba', 49000, 42000, 0),
(921, 'Kab. Luwu Utara', 'Baebunta, BoneBone, Limbong, Malangke, Malangke Barat, Mappedeceng, Rampi, Sabbang, Seko, Walenrang, Suli, Bajo, Bassesangtempe, Bua, Bua Ponrang, Kamanre, Lamasi, Larompong, Laronpong Selatan, Latimojong, Poncang, Sukamaju', 62000, 53000, 0),
(922, 'Kab. Luwu Timur', 'Malili / Soroako', 49000, 42000, 0),
(923, 'Kab. Luwu Timur', 'Angkona, Burau, Mangkutana, Nuha, Tomoni, Towuti, Wotu', 62000, 53000, 0),
(924, 'Kab. Mamasa', 'Mamasa', 49000, 42000, 0),
(925, 'Kab. Mamasa', 'Tabulahan, Tabang, Sumarorong, Sesena Padang, Nosu, Pana, Messawa, Mambi, Aralle, Tanduk Kalua', 62000, 53000, 0),
(926, 'Kab. Mamuju Utara', 'Pasangkayu', 49000, 42000, 0),
(927, 'Kab. Mamuju Utara', 'Bambalamotu, Baras, Sarudu', 62000, 53000, 0);

-- --------------------------------------------------------

--
-- Table structure for table `transactionhistory`
--

CREATE TABLE `transactionhistory` (
  `history_id` int(12) NOT NULL,
  `transaction_id` int(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `transaction_id` int(12) NOT NULL,
  `pemandu_id` int(12) NOT NULL,
  `user_id` int(12) NOT NULL,
  `produk_id` varchar(12) NOT NULL,
  `type` varchar(25) NOT NULL,
  `jumlah` int(50) NOT NULL,
  `transaction_date` datetime NOT NULL,
  `transaction_status` int(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `transactions`
--

INSERT INTO `transactions` (`transaction_id`, `pemandu_id`, `user_id`, `produk_id`, `type`, `jumlah`, `transaction_date`, `transaction_status`) VALUES
(1, 2, 22, '3', '', 1, '2018-05-28 17:19:29', 3),
(4, 1, 24, '1', 'Homestay', 1, '2018-05-29 16:44:35', 3);

-- --------------------------------------------------------

--
-- Table structure for table `transaksi_barang`
--

CREATE TABLE `transaksi_barang` (
  `transaction_id` int(13) NOT NULL,
  `pemandu_id` int(13) NOT NULL,
  `user_id` int(13) NOT NULL,
  `barang_id` int(13) NOT NULL,
  `jumlah_barang` int(13) NOT NULL,
  `ongkos_kirim` decimal(10,0) NOT NULL,
  `total_harga` decimal(11,0) NOT NULL,
  `transaction_date` datetime NOT NULL,
  `transaction_status` int(13) NOT NULL,
  `no_resi` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `transaksi_barang`
--

INSERT INTO `transaksi_barang` (`transaction_id`, `pemandu_id`, `user_id`, `barang_id`, `jumlah_barang`, `ongkos_kirim`, `total_harga`, `transaction_date`, `transaction_status`, `no_resi`) VALUES
(1, 1, 24, 1, 5, '8000', '108000', '2018-06-08 18:59:18', 1, ''),
(2, 1, 24, 1, 5, '35000', '135000', '2018-06-08 19:53:52', 1, '');

-- --------------------------------------------------------

--
-- Table structure for table `transaksi_homestay`
--

CREATE TABLE `transaksi_homestay` (
  `transaction_id` int(12) NOT NULL,
  `pemandu_id` int(12) NOT NULL,
  `user_id` int(12) NOT NULL,
  `homestay_id` int(12) NOT NULL,
  `check_in` datetime NOT NULL,
  `check_out` datetime NOT NULL,
  `jumlah_hari` int(12) NOT NULL,
  `transaction_date` datetime NOT NULL,
  `endtransaction_date` datetime NOT NULL,
  `transaction_status` int(11) NOT NULL,
  `notifikasi_status` int(13) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `transaksi_homestay`
--

INSERT INTO `transaksi_homestay` (`transaction_id`, `pemandu_id`, `user_id`, `homestay_id`, `check_in`, `check_out`, `jumlah_hari`, `transaction_date`, `endtransaction_date`, `transaction_status`, `notifikasi_status`) VALUES
(1, 1, 24, 1, '2018-06-03 13:00:00', '2018-06-04 12:00:00', 1, '2018-06-02 17:13:39', '0000-00-00 00:00:00', 3, 0),
(2, 1, 24, 1, '2018-06-01 13:00:00', '2018-06-03 12:00:00', 2, '2018-06-04 16:01:05', '0000-00-00 00:00:00', 1, 0),
(3, 1, 24, 1, '2018-06-10 13:00:00', '2018-06-12 12:00:00', 2, '2018-06-04 16:15:43', '0000-00-00 00:00:00', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `transaksi_jasa`
--

CREATE TABLE `transaksi_jasa` (
  `transaction_id` int(13) NOT NULL,
  `pemandu_id` int(13) NOT NULL,
  `user_id` int(13) NOT NULL,
  `jasa_id` int(13) NOT NULL,
  `tanggal_booking` date NOT NULL,
  `transaction_date` datetime NOT NULL,
  `transaction_status` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `transaksi_jasa`
--

INSERT INTO `transaksi_jasa` (`transaction_id`, `pemandu_id`, `user_id`, `jasa_id`, `tanggal_booking`, `transaction_date`, `transaction_status`) VALUES
(1, 2, 22, 1, '2018-06-09', '2018-06-08 16:00:43', 1);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` char(40) NOT NULL,
  `nama` varchar(25) NOT NULL,
  `alamat` varchar(250) NOT NULL,
  `no_hp` varchar(20) NOT NULL,
  `role` varchar(10) NOT NULL,
  `photo` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `email`, `password`, `nama`, `alamat`, `no_hp`, `role`, `photo`) VALUES
(3, 'admin1@gmail.com', 'adminsetapakbogor', 'Amos Tiberio Sungguraja', 'jl swadaya ix rt 09/01 no 17 jaticempaka pondokgede bekasi 17411', '081289063136', 'admin', ''),
(22, 'amostiberio@gmail.com', '83a291a32137f869ed9a209d065b6d95', 'Amos Tiberio Sungguraja', 'jl swadaya ix rt 09/01 no 17 jaticempaka pondokgede bekasi 17411', '081289063136', 'user', './public/uploads/userphoto/userPhoto-22.png'),
(24, 'emielkautsar@gmail.com', 'dd1b91becdab78b694efa2f762539156', 'Emiel Kautsar', 'Bogor', '081289063136', 'user', './public/uploads/userphoto/UserPhoto-24-magical_sky_touch_by_qauz-dcbyr4z.jpg.png'),
(25, 'amosamos@gmail.com', 'd84a9fce4d2a4d4d89a6b494dd5a6ad3', 'Amos Tiberio', 'Jl swadaya ix', '0812896263136', 'user', ''),
(26, 'amoscoba@gmail.com', 'yutub13e', 'amoscoba', 'jalancoba', '081289063136', 'user', ''),
(27, 'amoscobaa@gmail.com', 'c22897ba43f7cfafa5a6c7fb93c95e2e', 'amoscoba', 'jalancoba', '081289063136', 'user', ''),
(28, 'amoscobaaa@gmail.com', 'c22897ba43f7cfafa5a6c7fb93c95e2e', 'amoscoba', 'asdasd', '081289063136', 'user', '');

-- --------------------------------------------------------

--
-- Table structure for table `wisatawan`
--

CREATE TABLE `wisatawan` (
  `role` int(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `alamatcategory`
--
ALTER TABLE `alamatcategory`
  ADD PRIMARY KEY (`alamatcategory_id`);

--
-- Indexes for table `barang`
--
ALTER TABLE `barang`
  ADD PRIMARY KEY (`barang_id`);

--
-- Indexes for table `fasilitas`
--
ALTER TABLE `fasilitas`
  ADD PRIMARY KEY (`fasilitas_id`);

--
-- Indexes for table `homestay`
--
ALTER TABLE `homestay`
  ADD PRIMARY KEY (`homestay_id`);

--
-- Indexes for table `jasa`
--
ALTER TABLE `jasa`
  ADD PRIMARY KEY (`jasa_id`);

--
-- Indexes for table `pemandu`
--
ALTER TABLE `pemandu`
  ADD PRIMARY KEY (`pemandu_id`);

--
-- Indexes for table `pictures`
--
ALTER TABLE `pictures`
  ADD PRIMARY KEY (`picture_id`);

--
-- Indexes for table `review_produk`
--
ALTER TABLE `review_produk`
  ADD PRIMARY KEY (`review_id`);

--
-- Indexes for table `tarif`
--
ALTER TABLE `tarif`
  ADD PRIMARY KEY (`tarif_id`),
  ADD KEY `kota` (`kota`);

--
-- Indexes for table `transactionhistory`
--
ALTER TABLE `transactionhistory`
  ADD PRIMARY KEY (`history_id`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`transaction_id`);

--
-- Indexes for table `transaksi_barang`
--
ALTER TABLE `transaksi_barang`
  ADD PRIMARY KEY (`transaction_id`);

--
-- Indexes for table `transaksi_homestay`
--
ALTER TABLE `transaksi_homestay`
  ADD PRIMARY KEY (`transaction_id`);

--
-- Indexes for table `transaksi_jasa`
--
ALTER TABLE `transaksi_jasa`
  ADD PRIMARY KEY (`transaction_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `alamatcategory`
--
ALTER TABLE `alamatcategory`
  MODIFY `alamatcategory_id` int(25) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `barang`
--
ALTER TABLE `barang`
  MODIFY `barang_id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `fasilitas`
--
ALTER TABLE `fasilitas`
  MODIFY `fasilitas_id` int(25) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `homestay`
--
ALTER TABLE `homestay`
  MODIFY `homestay_id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `jasa`
--
ALTER TABLE `jasa`
  MODIFY `jasa_id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `pemandu`
--
ALTER TABLE `pemandu`
  MODIFY `pemandu_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `pictures`
--
ALTER TABLE `pictures`
  MODIFY `picture_id` int(13) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `review_produk`
--
ALTER TABLE `review_produk`
  MODIFY `review_id` int(13) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tarif`
--
ALTER TABLE `tarif`
  MODIFY `tarif_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=928;

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `transaction_id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `transaksi_barang`
--
ALTER TABLE `transaksi_barang`
  MODIFY `transaction_id` int(13) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `transaksi_homestay`
--
ALTER TABLE `transaksi_homestay`
  MODIFY `transaction_id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `transaksi_jasa`
--
ALTER TABLE `transaksi_jasa`
  MODIFY `transaction_id` int(13) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

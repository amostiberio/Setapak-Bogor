-- phpMyAdmin SQL Dump
-- version 4.8.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 02, 2018 at 04:20 AM
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
(1, 1, '', 20000, 0, 0, ' Edit ', '2018-05-11 16:19:36'),
(6, 1, '', 511, 0, 0, ' Percobaan 1 ', '2018-05-11 17:38:54'),
(7, 1, '', 511, 0, 0, ' Percobaan 1 ', '2018-05-11 17:38:55');

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
  `tanggal_startavail` date NOT NULL,
  `tanggal_stopavail` date NOT NULL,
  `deskripsi` text NOT NULL,
  `alamat` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `homestay`
--

INSERT INTO `homestay` (`homestay_id`, `pemandu_id`, `fasilitas_id`, `alamatcategory_id`, `nama_homestay`, `harga_perhari`, `tanggal_startavail`, `tanggal_stopavail`, `deskripsi`, `alamat`) VALUES
(1, 1, 9, 17, 'Keray', 20000, '0000-00-00', '0000-00-00', 'Homestay keluar Amos', 'Jl raya dramaga'),
(2, 1, 10, 17, 'Keraz', 30000, '0000-00-00', '0000-00-00', 'Homestay keluar Amos', 'Jl raya dramaga'),
(3, 2, 11, 17, 'Homestay ku', 20000, '0000-00-00', '0000-00-00', 'Homestay keluar Emiel', 'Jl raya dramaga');

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
  `jumlah_slot` int(3) NOT NULL,
  `tanggal_startavail` date NOT NULL,
  `tanggal_stopavail` date NOT NULL,
  `deskripsi` text NOT NULL,
  `lokasi_wisata` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
  `tipe_produk` varchar(30) NOT NULL,
  `directory` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
(1, 2, 22, '3', '', 1, '2018-05-28 17:19:29', 1),
(4, 1, 24, '1', 'Homestay', 1, '2018-05-29 16:44:35', 0);

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
  `transaction_status` int(13) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
  `transaction_status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `transaksi_homestay`
--

INSERT INTO `transaksi_homestay` (`transaction_id`, `pemandu_id`, `user_id`, `homestay_id`, `check_in`, `check_out`, `jumlah_hari`, `transaction_date`, `transaction_status`) VALUES
(0, 0, 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, '0000-00-00 00:00:00', 0);

-- --------------------------------------------------------

--
-- Table structure for table `transaksi_jasa`
--

CREATE TABLE `transaksi_jasa` (
  `transaction_id` int(13) NOT NULL,
  `pemandu_id` int(13) NOT NULL,
  `user_id` int(13) NOT NULL,
  `jasa_id` int(13) NOT NULL,
  `tipe_slot` int(3) NOT NULL,
  `tanggal_booking` date NOT NULL,
  `transaction_date` datetime NOT NULL,
  `transaction_status` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
(23, 'amostiberiobeatboxer@gmail.com', '83a291a32137f869ed9a209d065b6d95', 'Amos Tiberio Sungguraja', 'jl swadaya ix rt 09/01 no 17 jaticempaka pondokgede bekasi 17411', '081289063136', 'user', ''),
(24, 'emielkautsar@gmail.com', 'dd1b91becdab78b694efa2f762539156', 'Emiel Kautsar', 'Bogor', '081289063136', 'user', '');

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
  MODIFY `jasa_id` int(12) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pemandu`
--
ALTER TABLE `pemandu`
  MODIFY `pemandu_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `pictures`
--
ALTER TABLE `pictures`
  MODIFY `picture_id` int(13) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `transaction_id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `transaksi_barang`
--
ALTER TABLE `transaksi_barang`
  MODIFY `transaction_id` int(13) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `transaksi_jasa`
--
ALTER TABLE `transaksi_jasa`
  MODIFY `transaction_id` int(13) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

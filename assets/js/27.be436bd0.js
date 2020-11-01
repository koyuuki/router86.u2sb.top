(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{423:function(s,t,e){"use strict";e.r(t);var a=e(50),_=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),e("p",[s._v("这一部分内容实在是太多了，即使本文已经尽量详细介绍，也会因为硬件环境或者系统版本不同，产生不一样的问题，遇到本文没有提到的问题，还请自行解决。")])]),s._v(" "),e("h2",{attrs:{id:"准备"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#准备"}},[s._v("#")]),s._v(" 准备")]),s._v(" "),e("p",[s._v("首先需要准备 PVE 的安装镜像，这个可以在"),e("a",{attrs:{href:"https://www.proxmox.com/en/downloads",target:"_blank",rel:"noopener noreferrer"}},[s._v("官网"),e("OutboundLink")],1),s._v("下载，网络不好的同学请自行想办法解决。")]),s._v(" "),e("p",[s._v("然后需要软路由镜像，如果使用爱快的话，也可以直接在"),e("a",{attrs:{href:"https://www.ikuai8.com/component/download",target:"_blank",rel:"noopener noreferrer"}},[s._v("官网"),e("OutboundLink")],1),s._v("下载。需要 openwrt 的话，可以到你能找到的地方下载，也可以在我的"),e("a",{attrs:{href:"https://dl.u2sb.top/#/s/GPIQ?path=%2Fblog%2F%E8%BD%AF%E8%B7%AF%E7%94%B1%2FOpenWRT",target:"_blank",rel:"noopener noreferrer"}},[s._v("网盘"),e("OutboundLink")],1),s._v("里下载，或者是使用"),e("a",{attrs:{href:"https://github.com/xiaoqingfengATGH/HomeLede",target:"_blank",rel:"noopener noreferrer"}},[s._v(" HomeLede"),e("OutboundLink")],1),s._v(" 镜像。")]),s._v(" "),e("p",[s._v("准备好镜像之后，需要把 PVE 镜像烧录到 U 盘里。")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://blog.xxwhite.com/assets/img/2020/200720-114245-balenaEtcher_8E7PtNeR5D.png",alt:""}})]),s._v(" "),e("p",[s._v("本文演示所用版本为：")]),s._v(" "),e("ul",[e("li",[s._v("pve 6.2-4")]),s._v(" "),e("li",[s._v("ikuai iKuai8_3.3.9_Build202006150942")])]),s._v(" "),e("p",[s._v("所在网络环境：")]),s._v(" "),e("ul",[e("li",[s._v("当前使用路由器，网关为 192.168.1.1")])]),s._v(" "),e("p",[s._v("阅读要求：")]),s._v(" "),e("ul",[e("li",[s._v("具有一定的解决问题能力，能熟练使用百度等搜索引擎；")]),s._v(" "),e("li",[s._v("有一点 Linux 基础知识，常识上的东西要懂，ssh 工具要会用；")]),s._v(" "),e("li",[s._v("会在 Linux 上编辑文档，现在不会的话，马上去百度 vi 编辑器使用。")])]),s._v(" "),e("h2",{attrs:{id:"视频教程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#视频教程"}},[s._v("#")]),s._v(" 视频教程")]),s._v(" "),e("bilibili",{attrs:{bvid:"BV1jh411Z7fQ",page:1,highQuality:!0,danmaku:!0}}),s._v(" "),e("bilibili",{attrs:{bvid:"BV1YT4y1L71c",page:1,highQuality:!0,danmaku:!0}}),s._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),e("p",[s._v("视频教程和文字教程中间一些步骤稍有不同，但是只要搞懂了原理，步骤看起来就全都是一样了。")])]),s._v(" "),e("h2",{attrs:{id:"虚拟机布置示意图"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#虚拟机布置示意图"}},[s._v("#")]),s._v(" 虚拟机布置示意图")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://blog.xxwhite.com/assets/img/2020/pve-net.png",alt:""}})]),s._v(" "),e("p",[s._v("我这套方案是爱快作为主路由，OpenWRT 作为旁路由，DHCP 服务端在旁路由上，内部设备默认全部走旁路由，不想走旁路由的需要手动设置 IP 和网关，适合家用。")]),s._v(" "),e("p",[s._v("如果还有其他的接口，如果要当 LAN 口，就全部加入到这个网桥中，如果要当 WAN 口，就直通到爱快虚拟机中。如果不需要双软路由，就把唯一的软路由放在爱快的位置。")]),s._v(" "),e("p",[s._v("如果你有特别多的网口，可以将一个网口直通到爱快里，连接交换机作也许可以降低一点点延时，如果你只有两个三个网口，老老实实按照我的教程走。")]),s._v(" "),e("p",[s._v("整台机器对外只有 WAN 口和 LAN 口两个接口，WAN 口接光猫，LAN 口接交换机之类的设备。不要把他想的多复杂，对外和普通软路由没啥区别。")]),s._v(" "),e("h2",{attrs:{id:"安装虚拟机"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装虚拟机"}},[s._v("#")]),s._v(" 安装虚拟机")]),s._v(" "),e("p",[s._v("将 U 盘插入机器，进入 BIOS，选择使用 U 盘启动，如果有安全启动之类的东西，请先关掉。并且需要打开 vt-x 和 vt-d。")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://blog.xxwhite.com/assets/img/2020/bandicam_2020-07-21_09-48-45-084.png",alt:""}})]),s._v(" "),e("p",[e("img",{attrs:{src:"https://blog.xxwhite.com/assets/img/2020/bandicam_2020-07-21_09-48-56-157.png",alt:""}})]),s._v(" "),e("p",[s._v("记得硬盘要改为 AHCI 模式。")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://blog.xxwhite.com/assets/img/2020/bandicam_2020-07-21_09-48-01-863.png",alt:""}})]),s._v(" "),e("p",[s._v("做完上述修改之后，就可以使用 U 盘启动安装 PVE 了。进入 PVE 安装，只要按照提示一步一步往下走就可以了，这里不做详细讲解，遇到不明白的可以百度。")]),s._v(" "),e("p",[s._v("注意一下，在安装过程中插有网线的那张网卡会被自动添加进网桥里，以后也就会用作路由器的 LAN 口。")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://blog.xxwhite.com/assets/img/2020/bandicam_2020-07-21_10-05-20-311.png",alt:""}})]),s._v(" "),e("p",[s._v("安装完成以后，重启并在浏览器打开后台。记得后台地址一定要加 https。")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://blog.xxwhite.com/assets/img/2020/bandicam_2020-07-21_10-08-39-161.png",alt:""}})]),s._v(" "),e("p",[e("img",{attrs:{src:"https://blog.xxwhite.com/assets/img/2020/200721_101427_msedge_x79A.png",alt:""}})]),s._v(" "),e("h2",{attrs:{id:"设置硬件直通"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置硬件直通"}},[s._v("#")]),s._v(" 设置硬件直通")]),s._v(" "),e("p",[s._v("想要让 PVE 硬件直通，需要做一些修改。")]),s._v(" "),e("p",[s._v("使用 ssh 登录到 pve 服务器，我这里使用 Windows Terminal 演示，大家可以根据自己的喜好选择使用别的 shell 工具，比如 xshell 或者 finalshell。")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://blog.xxwhite.com/assets/img/2020/200721_112133_WindowsTerminal_F0uH.png",alt:""}})]),s._v(" "),e("p",[s._v("以下内容使用到了 vi 编辑器，vi 编辑器的使用方法请自行百度。")]),s._v(" "),e("p",[s._v("修改 grub 文件")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("vi /etc/default/grub\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("找到  "),e("code",[s._v('GRUB_CMDLINE_LINUX_DEFAULT="quiet"')]),s._v(" ，修改为  "),e("code",[s._v('GRUB_CMDLINE_LINUX_DEFAULT="quiet intel_iommu=on"')]),s._v(" ，amd 的话就改为  "),e("code",[s._v('GRUB_CMDLINE_LINUX_DEFAULT="quiet amd_iommu=on"')])]),s._v(" "),e("p",[e("img",{attrs:{src:"https://blog.xxwhite.com/assets/img/2020/200721_112241_WindowsTerminal_6CmX.png",alt:""}})]),s._v(" "),e("p",[s._v("下面这个命令会直接替换掉上面所述的内容。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('sed -i "s/GRUB_CMDLINE_LINUX_DEFAULT=\\"quiet\\"/GRUB_CMDLINE_LINUX_DEFAULT=\\"quiet intel_iommu=on\\"/g" /etc/default/grub\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("然后保存，输入命令")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("update-grub\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("打开  "),e("code",[s._v("/etc/modules")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("vi /etc/modules\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("增加以下内容")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("vfio\nvfio_iommu_type1\nvfio_pci\nvfio_virqfd\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://blog.xxwhite.com/assets/img/2020/200721_112418_WindowsTerminal_Oeo6.png",alt:""}})]),s._v(" "),e("p",[s._v("下面的命令会自动完成上述工作 (整段复制粘贴进去)")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("cat>>/etc/modules<<EOF\n\nvfio\nvfio_iommu_type1\nvfio_pci\nvfio_virqfd\nEOF\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("保存，并"),e("strong",[s._v("重启")]),s._v("服务器。")]),s._v(" "),e("h2",{attrs:{id:"安装和配置爱快"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装和配置爱快"}},[s._v("#")]),s._v(" 安装和配置爱快")]),s._v(" "),e("h3",{attrs:{id:"准备镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#准备镜像"}},[s._v("#")]),s._v(" 准备镜像")]),s._v(" "),e("p",[s._v("安装爱快有两种方法，一种是直接使用 ISO 镜像安装，另一种是导入 IMG 镜像，由于使用 ISO 安装 64 位爱快，必须要有 4G 以上的内存，对于小内存机器并不友好，所以我打算使用第二种方法安装。")]),s._v(" "),e("p",[s._v("下载爱快的 IMG 镜像，然后用 DiskGenius 处理一下镜像，这个工具在我的网盘里也有下载。")]),s._v(" "),e("p",[s._v("首先创建一个空的磁盘镜像文件  "),e("code",[s._v("磁盘")]),s._v("  -> "),e("code",[s._v("新建虚拟磁盘文件")]),s._v("  -> "),e("code",[s._v("img格式")]),s._v(" ，大小选择 1G 就可以，如果你喜欢的话，可以搞更大。")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://blog.xxwhite.com/assets/img/2020/200721_114351_DiskGenius_7FnC.pngg",alt:""}})]),s._v(" "),e("p",[e("img",{attrs:{src:"https://blog.xxwhite.com/assets/img/2020/200721_114424_DiskGenius_CWx2.png",alt:""}})]),s._v(" "),e("p",[s._v("然后把下载好的爱快镜像也拖进来，使用  "),e("code",[s._v("工具")]),s._v("  -> "),e("code",[s._v("磁盘克隆")]),s._v("  功能，把爱快复制到这块新盘上面。")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://blog.xxwhite.com/assets/img/2020/200721_114504_DiskGenius_QAvc.png",alt:""}})]),s._v(" "),e("p",[s._v("将新建的这块磁盘镜像上传到服务器上，我这里使用 SCP 工具，你也可以使用其他工具。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("scp D:\\MonoLogueChi\\Desktop\\ikuai.img root@192.168.1.68:~\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://blog.xxwhite.com/assets/img/2020/200721_115842_WindowsTerminal_IsPX.png",alt:""}})]),s._v(" "),e("h3",{attrs:{id:"创建虚拟机"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建虚拟机"}},[s._v("#")]),s._v(" 创建虚拟机")]),s._v(" "),e("p",[s._v("然后创建虚拟机，这一步需要注意的几个点，硬盘选择 SATA 模式，硬盘大小无所谓，等下我们都是要删掉的。")]),s._v(" "),e("p",[s._v("CPU 的类别要选择你自己 CPU 对应的，如果实在不清楚，就选 KVM64（性能上会稍微差一点）或者 host（性能更强，但是兼容性较差）。")]),s._v(" "),e("p",[s._v("如果是用在生产环境，64 位固件推荐给 2G 或更高内存，我这里只是演示，就只给了 1G 内存。")]),s._v(" "),e("p",[s._v("网络那里现在只添加一个网桥的接口就可以。")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://blog.xxwhite.com/assets/img/2020/200721_123457_msedge_19Og.png",alt:""}})]),s._v(" "),e("p",[e("img",{attrs:{src:"https://blog.xxwhite.com/assets/img/2020/200721_123513_msedge_MZ5f.png",alt:""}})]),s._v(" "),e("p",[e("img",{attrs:{src:"https://blog.xxwhite.com/assets/img/2020/200721_123530_msedge_1jTI.png",alt:""}})]),s._v(" "),e("p",[e("img",{attrs:{src:"https://blog.xxwhite.com/assets/img/2020/200721_123610_msedge_1mOU.png",alt:""}})]),s._v(" "),e("p",[e("img",{attrs:{src:"https://blog.xxwhite.com/assets/img/2020/200721_123632_msedge_nqMJ.png",alt:""}})]),s._v(" "),e("p",[e("img",{attrs:{src:"https://blog.xxwhite.com/assets/img/2020/200721_123655_msedge_ssSb.png",alt:""}})]),s._v(" "),e("p",[e("img",{attrs:{src:"https://blog.xxwhite.com/assets/img/2020/200721_123709_msedge_OLph.png",alt:""}})]),s._v(" "),e("p",[e("img",{attrs:{src:"https://blog.xxwhite.com/assets/img/2020/200721_123721_msedge_5rfn.png",alt:""}})]),s._v(" "),e("p",[s._v("然后分离并且删除刚才创建的虚拟硬盘，也就是 sata0，一定要记得删除。")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://blog.xxwhite.com/assets/img/2020/200721_125612_msedge_I9PI.png",alt:""}})]),s._v(" "),e("p",[s._v("然后再使用 ssh 登录到 PVE，定位到刚才上传镜像的目录，然后将镜像导入到 PVE 中。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("qm importdisk 100 ikuai.img local-lvm\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("其中  "),e("code",[s._v("100")]),s._v("  为虚拟机 ID，可以在控制台查看， "),e("code",[s._v("ikuai.img")]),s._v("  镜像路径，可以是相对路径，也可以是绝对路径  "),e("code",[s._v("local-lvm")]),s._v("  就不要改了。")]),s._v(" "),e("p",[s._v("然后回到浏览器里的管理后台，可以看到编号为 100 的爱快下面，多了一块未使用的磁盘 0，把这块磁盘加上去。")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://blog.xxwhite.com/assets/img/2020/200721_131026_msedge_IbbL.png",alt:""}})]),s._v(" "),e("p",[s._v("如果你前面选的不是 sata，或者是没有删除原有的磁盘，记得要到选项里面修改启动顺序。")]),s._v(" "),e("p",[s._v("完成上面的操作以后，我们就开机，爱快第一次启动会自动初始化硬盘，并且会自动重启一次，这个不要担心，慢慢等就好。等开机以后会看到如下图的一个东西，看到这个就证明已经安装成功了，我们先关机。")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://blog.xxwhite.com/assets/img/2020/200721_131748_msedge_qd78.png",alt:""}})]),s._v(" "),e("h3",{attrs:{id:"查找网卡-id"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查找网卡-id"}},[s._v("#")]),s._v(" 查找网卡 ID")]),s._v(" "),e("h4",{attrs:{id:"简单方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简单方法"}},[s._v("#")]),s._v(" 简单方法")]),s._v(" "),e("p",[s._v("输入命令")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("dmesg | grep eth\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("会输出")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[    1.407753] e1000e 0000:00:19.0 eth0: (PCI Express:2.5GT/s:Width x1) bc:5f:f4:ab:d8:7b\n[    1.407754] e1000e 0000:00:19.0 eth0: Intel(R) PRO/1000 Network Connection\n[    1.407788] e1000e 0000:00:19.0 eth0: MAC: 10, PHY: 11, PBA No: FFFFFF-0FF\n[    1.516131] e1000e 0000:02:00.0 eth1: (PCI Express:2.5GT/s:Width x1) bc:5f:f4:ab:d8:7c\n[    1.516133] e1000e 0000:02:00.0 eth1: Intel(R) PRO/1000 Network Connection\n[    1.516147] e1000e 0000:02:00.0 eth1: MAC: 4, PHY: 8, PBA No: FFFFFF-0FF\n[    1.516934] e1000e 0000:00:19.0 enp0s25: renamed from eth0\n[    1.529255] e1000e 0000:02:00.0 enp2s0: renamed from eth1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[s._v("我们就知道了网卡 ID 和网卡的对应关系")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("enp0s25")]),s._v("  -  "),e("code",[s._v("eth0")]),s._v("  -  "),e("code",[s._v("00:19.0")])]),s._v(" "),e("li",[e("code",[s._v("enp2s0")]),s._v("  -  "),e("code",[s._v("eth1")]),s._v("  -  "),e("code",[s._v("02:00.0")])])]),s._v(" "),e("h4",{attrs:{id:"标准方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#标准方法"}},[s._v("#")]),s._v(" 标准方法")]),s._v(" "),e("p",[s._v("先输入")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("ip addr\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("看到有输出")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000\n    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00\n    inet 127.0.0.1/8 scope host lo\n       valid_lft forever preferred_lft forever\n    inet6 ::1/128 scope host\n       valid_lft forever preferred_lft forever\n2: enp0s25: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast master vmbr0 state UP group default qlen 1000\n    link/ether bc:5f:f4:ab:d8:7b brd ff:ff:ff:ff:ff:ff\n3: enp2s0: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN group default qlen 1000\n    link/ether bc:5f:f4:ab:d8:7c brd ff:ff:ff:ff:ff:ff\n4: vmbr0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default qlen 1000\n    link/ether bc:5f:f4:ab:d8:7b brd ff:ff:ff:ff:ff:ff\n    inet 192.168.1.68/24 brd 192.168.1.255 scope global vmbr0\n       valid_lft forever preferred_lft forever\n    inet6 fe80::be5f:f4ff:feab:d87b/64 scope link\n       valid_lft forever preferred_lft forever\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br")])]),e("p",[s._v("可以判断得到，两张网卡的名称分别是  "),e("code",[s._v("enp0s25")]),s._v("  和  "),e("code",[s._v("enp2s0")]),s._v(" ，其实这一步也可以省略，因为在 PVE 的管理后台就能看到网卡的信息。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("lspci |grep net\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("输出")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("00:19.0 Ethernet controller: Intel Corporation 82579LM Gigabit Network Connection (rev 04)\n02:00.0 Ethernet controller: Intel Corporation 82583V Gigabit Network Connection\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("其中  "),e("code",[s._v("00:19.0")]),s._v("  和  "),e("code",[s._v("02:00.0")]),s._v("  就是网卡的 ID。")]),s._v(" "),e("p",[s._v("然后输入")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("dmesg | grep enp2s0\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("会输出")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[    1.529255] e1000e 0000:02:00.0 enp2s0: renamed from eth1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("到这里，我们就可以知道，有对应关系  "),e("code",[s._v("enp2s0")]),s._v("  -  "),e("code",[s._v("eth1")]),s._v("  -  "),e("code",[s._v("02:00.0")]),s._v(" ，另一张就是  "),e("code",[s._v("enp0s25")]),s._v("  -  "),e("code",[s._v("eth0")]),s._v("  -  "),e("code",[s._v("00:19.0")])]),s._v(" "),e("h3",{attrs:{id:"设置-wan-口直通"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置-wan-口直通"}},[s._v("#")]),s._v(" 设置 WAN 口直通")]),s._v(" "),e("p",[s._v("接下来回到后台，在 PVE 的网络选项卡里可以看到，网桥中的端口为  "),e("code",[s._v("enp0s25")]),s._v(" ，那我们需要直通的就是另一张网卡，也就是  "),e("code",[s._v("enp2s0")]),s._v(" ，ID 为  "),e("code",[s._v("02:00.0")])]),s._v(" "),e("p",[e("img",{attrs:{src:"https://blog.xxwhite.com/assets/img/2020/200721_140132_msedge_tgAr.png",alt:""}})]),s._v(" "),e("p",[s._v("在爱快虚拟机下的  "),e("code",[s._v("硬件")]),s._v("  -> "),e("code",[s._v("添加")]),s._v("  -> "),e("code",[s._v("PCI设备")]),s._v(" ，然后在下拉菜单找到对应 ID 的设备。")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://blog.xxwhite.com/assets/img/2020/200721_140747_msedge_tYCK.png",alt:""}})]),s._v(" "),e("p",[s._v("把 WAN 口插上网线，连接到原来的路由器，不要改变以前的网络设备，然后重新开机。")]),s._v(" "),e("p",[s._v("如果正常的话，可以看到 WAN 口和 LAN 口都是已连接。")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://blog.xxwhite.com/assets/img/2020/200721_141545_msedge_mR66.png",alt:""}})]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),e("p",[s._v("网卡直通怎么设计，要根据实际情况来，不要只会照抄方案，原则是流量最大的线路尽量少用虚拟网卡。")]),s._v(" "),e("p",[s._v("比如你的内网有 NAS，而且主要流量都在 NAS 上，这个时候可以考虑连接电脑的那个网口直通到 NAS 系统上。")]),s._v(" "),e("p",[s._v("再比如说，知识单软路由，而且主要流量不在内网，可以考虑将两个网口都直通到软路由上。")]),s._v(" "),e("p",[s._v("再比如说，双软路由，可以 WAN 口肯定是直通主路由，其他的网口，是直通给主路由还是旁路由，或者是不做直通，这就需要根据你的实际需做一个方案出来了。")])]),s._v(" "),e("h3",{attrs:{id:"爱快设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#爱快设置"}},[s._v("#")]),s._v(" 爱快设置")]),s._v(" "),e("p",[s._v("爱快的设置放在 OpenWRT 设置的后面")]),s._v(" "),e("h2",{attrs:{id:"安装和配置-openwrt"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装和配置-openwrt"}},[s._v("#")]),s._v(" 安装和配置 OpenWRT")]),s._v(" "),e("h3",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),e("p",[s._v("和上面创建爱快虚拟机的步骤一样，创建一个 OpenWRT 虚拟机，只是不需要提前处理镜像，也不需要做直通网卡这一步了。还有有区别的就是，如果是使用 UEFI 启动的镜像，需要选择 BIOS 为 UEFI 启动的，如果是传统方式启动的，就和爱快设置一样。")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://blog.xxwhite.com/assets/img/2020/200721_155550_msedge_fPSb.png",alt:""}})]),s._v(" "),e("p",[s._v("安装完成之后开机。")]),s._v(" "),e("h3",{attrs:{id:"配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),e("p",[s._v("我们需要将 OpenWRT 设置为旁路由，但是想要登录 OpenWRT 需要设置一下。")]),s._v(" "),e("p",[s._v("输入命令")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("ifconfig br-lan 192.168.1.2\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("然后在浏览器打开  "),e("code",[s._v("192.168.1.2")]),s._v(" ，就可以登录到 OpenWRT 的后台了。")]),s._v(" "),e("p",[s._v("再接下来修改 LAN 口，就按照旁路由的设置去修改。旁路由相关的文章，我在前几天写过，不懂的可以去翻一下（下面图片只是演示，具体要去看教程，有些需要在 DHCP 那里勾选上强制）。")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://blog.xxwhite.com/assets/img/2020/200721_165018_msedge_GvRD.png",alt:""}})]),s._v(" "),e("p",[e("img",{attrs:{src:"https://blog.xxwhite.com/assets/img/2020/200721_165042_msedge_a7lR.png",alt:""}})]),s._v(" "),e("p",[s._v("接下来还是测试，将电脑和虚拟机的 LAN 口直连，如果前面设置了手动设置 IP 和 DNS 就删掉，改成自动获取 IP 和 DNS。")]),s._v(" "),e("p",[s._v("过一会之后看一下效果")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://blog.xxwhite.com/assets/img/2020/200721_165921_explorer_XRgg.png",alt:""}})]),s._v(" "),e("p",[s._v("如图所示，网关和 DNS 服务器都指向旁路由，就说明设置成功了。")]),s._v(" "),e("p",[s._v("改变后的网络布局就先暂时不要动了，后面会接着设置爱快。")]),s._v(" "),e("h3",{attrs:{id:"爱快设置-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#爱快设置-2"}},[s._v("#")]),s._v(" 爱快设置")]),s._v(" "),e("p",[s._v("前面说了爱快设置放在 OpenWRT 后面，是因为我的这个特殊布局，DHCP 和 DNS 服务器都放在旁路由上，并且爱快默认没有开启 DHCP，先设置旁路由，再设置爱快会简单很多。")]),s._v(" "),e("p",[s._v("然后在浏览器打开  "),e("code",[s._v("192.168.1.1")]),s._v("  进入爱快后台，默认用户名和密码均为  "),e("code",[s._v("admin")]),s._v(" 。")]),s._v(" "),e("p",[s._v("设置外网，给 WAN 口绑定直通的那张网卡，然后先暂时选用  "),e("code",[s._v("DHCP")]),s._v(" （这些都是临时的，等整机安装完了，怎么改随你，如果你真有能力一步到位就去搞，没有能力就按照教程走），设置完了记得点一下确定，别傻傻的等他转完圈。")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://blog.xxwhite.com/assets/img/2020/200721_144443_msedge_yvwk.png",alt:""}})]),s._v(" "),e("p",[e("img",{attrs:{src:"https://blog.xxwhite.com/assets/img/2020/200721_144521_msedge_eXlW.png",alt:""}})]),s._v(" "),e("p",[s._v("至此，爱快就已经安装并且设置完成了，这里只是测试一下，测试完以后要将网线改回到初始的状态，电脑和 PVE 虚拟机的 LAN 口都接在同一交换机上。")]),s._v(" "),e("p",[s._v("再接下来主路由爱快和旁路由 OpenWRT 的设置就不需要我教了，大家可以发挥所长，打造自己的网络环境了，如果还是太多的内容不会的话，可以翻一翻其他的文章，多学习。")]),s._v(" "),e("h2",{attrs:{id:"安装-nas"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-nas"}},[s._v("#")]),s._v(" 安装 NAS")]),s._v(" "),e("p",[s._v("未完待续")])],1)}),[],!1,null,null,null);t.default=_.exports}}]);
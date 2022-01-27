<template>
    <!-- Sidebar -->
		<div class="sidebar sidebar-style-2">			
			<div class="sidebar-wrapper scrollbar scrollbar-inner">
				<div class="sidebar-content">
					<div class="user">
						<div class="avatar-sm float-left mr-2">
							<img src="assets/img/profile.jpg" alt="..." class="avatar-img rounded-circle">
						</div>
						<div class="info">
							<a data-toggle="collapse" href="#collapseExample" aria-expanded="true">
								<span>
									Hizrian
									<span class="user-level">Administrator</span>
									<span class="caret"></span>
								</span>
							</a>
							<div class="clearfix"></div>

							<div class="collapse in" id="collapseExample">
								<ul class="nav">
									<li>
										<a href="#profile">
											<span class="link-collapse">My Profile</span>
										</a>
									</li>
									<li>
										<a href="#edit">
											<span class="link-collapse">Edit Profile</span>
										</a>
									</li>
									<li>
										<a href="#settings">
											<span class="link-collapse">Settings</span>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<ul class="nav nav-primary">
                        <li class="nav-item active">
							<router-link to="/">
								<i class="fas fa-home"></i>
								<p>Dashboard</p>
							</router-link>
                        </li>
						<li class="nav-section">
							<span class="sidebar-mini-icon">
								<i class="fa fa-ellipsis-h"></i>
							</span>
							<h4 class="text-section">Components</h4>
						</li>
						<li class="nav-item menu-open">
                            <router-link to="/personil">
                                <i class="nav-icon fas fa-user-friends"></i>
                                <p>
                                Personil
                                </p>
                            </router-link>
                        </li>
                        <li class="nav-item menu-open">
                            <router-link to="/alatberat">
                                <i class="nav-icon fas fa-truck-monster"></i>
                                <p>
                                Alat Berat
                                </p>
                            </router-link>
                        </li>
                        <li class="nav-item menu-open">
                            <router-link to="/supir">
                                <i class="nav-icon far fa-stop-circle"></i>
                                <p>
                                Supir
                                </p>
                            </router-link>
                        </li>
                        <li class="nav-item menu-open">
                            <router-link to="/armada">
                                <i class="nav-icon fas fa-truck"></i>
                                <p>
                                Armada
                                </p>
                            </router-link>
                        </li>
                        <li class="nav-item menu-open">
                            <router-link to="/operator">
                                <i class="nav-icon fas fa-user"></i>
                                <p>
                                Operator
                                </p>
                            </router-link>
                        </li>
                        <li class="nav-item menu-open">
                            <router-link to="/stockpile">
                                <i class="nav-icon fas fa-map-marker-alt"></i>
                                <p>
                                Stockpile
                                </p>
                            </router-link>
                        </li>
                        <li class="nav-item menu-open">
                            <router-link to="/bbm">
                                <i class="nav-icon fas fa-gas-pump"></i>
                                <p>
                                BBM
                                </p>
                            </router-link>
                        </li>
					</ul>
				</div>
			</div>
		</div>
		<!-- End Sidebar -->
</template>
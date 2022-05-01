
  <!-- ======= Footer ======= -->
  <footer id="footer" class="footer">
    <div class="copyright">&copy; Copyright <strong><span>EN-IMS</span></strong>. All Rights Reserved</div>
  </footer>
  <!-- End Footer -->

  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
  
	<!-- jquery JS Files -->
  <script src="/assets/vendor/jquery/jquery.min.js"></script>
  <!-- Vendor JS Files -->
  <script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <!-- Template Main JS File -->
  <script src="/assets/mk/js/main.js"></script>
  
  <script>
		function getTime() {
			var today = new Date();
			var systime = today.toLocaleString();
			document.getElementById('spanTime').textContent = systime;
		}
		function init() {
			setInterval(getTime, 1000);
		}
		init();
	</script>
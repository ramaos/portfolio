<footer class="site__footer">
    <div class="copyright"> <i class="fa-regular fa-copyright"></i>
        <p>Amar BENAMAR - 2023</p>
    </div>
    <?php wp_nav_menu([
        'theme_location' => 'footer',
        'container' => false,
        'menu_class' => 'footer__nav'
    ]);
    ?>
</footer>
</main>
<?php wp_footer(); ?>
</body>

</html>